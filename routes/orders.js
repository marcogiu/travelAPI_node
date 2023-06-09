const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderByProduct,
  getOrderByDate,
} = require("../controllers/orderController");

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").get(getOrder).put(updateOrder).delete(deleteOrder);
router.route("/by-product/:product").get(getOrderByProduct);
router.route("/by-date/:date").get(getOrderByDate);

module.exports = router;
