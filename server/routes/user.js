const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requiredLogin");
const User = mongoose.model("User");

router.get("/user/:id", requireLogin, (req, res) => {
  // find the user
  User.findOne({ _id: req.params.id })
    // not adding the password
    .select("-password")
    // make another quier to finde posts by the user
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ err: "User not found" });
    });
});

module.exports = router;
