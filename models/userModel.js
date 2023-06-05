const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
