const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../keys");
const jwt = require("jsonwebtoken");

// TEST
router.get("/", (req, res) => {
  res.send("hello from router");
});

// SINGUP
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(422).json({ error: "Please add all teh required fields" });
  }

  // is email already excite
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        res.status(401).json({ error: "User already exsits with that email!" });
      }

      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email: email,
          name: name,
          password: hashedpassword,
        });

        user
          .save()
          .then((user) => res.json({ message: "saved successfully" }))
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// SIGNIN

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide an email or password" });
    return;
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid password or email" });
    }

    // compare password
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          res.json({ message: "successfully signed in!!" });

          const token = jwt.sign(
            {
              _id: savedUser._id,
            },
            JWT_SECRET
          );

          console.log(token);
          return;

          const { _id, name, email } = savedUser;
          res.json({ token, user: { _id, name, email } });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
