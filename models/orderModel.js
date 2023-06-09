const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  product: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
    required: (true, "Please enter at least one product"),
  },
  user: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    required: (true, "Please enter at least one user"),
  },
  date: {
    type: Date, // YYYY-MM-DD
    required: (true, "Please enter a valid ISO date"),
  },
});

module.exports = mongoose.model("Order", orderSchema, "Orders");
