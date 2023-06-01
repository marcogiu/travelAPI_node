const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
