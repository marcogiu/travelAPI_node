const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  products: {
    type: [Schema.Types.ObjectId],
  },
});

module.exports = mongoose.model("Order", orderSchema);
