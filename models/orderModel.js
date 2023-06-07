const mongoose = require("mongoose");
const User = require("./userModel");
const Product = require("./productModel");

const orderSchema = mongoose.Schema({
  Product: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Product,
    required: true,
  },
  User: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: User,
    required: true,
  },
  date: {
    type: Date, // YYYY-MM-DD
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
