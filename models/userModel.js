const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: (true, "Please enter your name"),
  },
  surname: {
    type: "string",
    required: (true, "Please enter your surname"),
  },
  email: {
    type: "string",
    required: (true, "Please enter your email"),
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
});

module.exports = mongoose.model("User", userSchema, "Users");
