const Order = require("../models/orderModel");

const asyncHandler = require("express-async-handler");

// visualizza tutti gli ordini
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("product user");
  res.status(200).json(orders);
});

// visualizza singolo ordine
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.status(200).json(order);
});

// crea un nuovo ordine
const createOrder = asyncHandler(async (req, res) => {
  const { product, user, date } = req.body;
  if (!product || !user || !date) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const order = await Order.create({
    product,
    user,
    date,
  });
  await order.populate("product user");
  res.status(201).json(order);
});

module.exports = { getOrders, getOrder, createOrder };
