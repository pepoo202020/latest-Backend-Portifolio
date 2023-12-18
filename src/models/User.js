const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userEmail: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
  },
  userPassword: {
    type: "string",
    required: true,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
