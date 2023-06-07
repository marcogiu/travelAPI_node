const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  createOrder,
} = require("../controllers/orderController");

router.route("/").get(getOrders);

router.route("/:id").get(getOrder);

router.route("/").post(createOrder);

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: "modifica ordine" });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: "elimina ordine" });
});

module.exports = router;
