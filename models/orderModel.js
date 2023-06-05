const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  products: {
    type: [Schema.Types.ObjectId],
  },
  orders: {
    type: [Schema.types.ObjectId],
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Order", orderSchema);
