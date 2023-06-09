const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    required: (true, "please enter a product name"),
  },
});

module.exports = mongoose.model("Product", productSchema, "Products");
