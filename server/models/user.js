const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  expireToken: Date,
  pic: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1559566451-369e366b39b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

mongoose.model("User", userSchema);
