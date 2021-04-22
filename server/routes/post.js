const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requiredLogin");

// GET ALL POST
router.get("/allpost", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => {
      res.status(404).json({ err: err });
    });
});

// GET USER POST
router.get("/mypost", requireLogin, (req, res) => {
  // find th euser posts postedBy id
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost: mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

// CREATE A POST
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, photo } = req.body;

  if (!title || !body || !photo) {
    res.status(422).json({ error: "Please add all the required fields" });
  }

  // not show our password
  req.user.password = undefined;

  // create a new post
  const post = new Post({
    title: title,
    body: body,
    photo: photo,
    postedBy: req.user,
  });
  post
    .save()
    .then((results) => {
      res.json({ post: results });
    })
    .catch((error) => {
      console.log(error);
    });
});

// LIKE
router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

// UNLIKE POST
router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

// COMMENT ON POST
router.put("/comment", (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };

  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    // populate the name
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

// DELETE POST
router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json({ result });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
