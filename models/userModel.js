const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  surname: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
