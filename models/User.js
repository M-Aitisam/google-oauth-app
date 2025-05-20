const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
