const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

// visualizza tutti gli ordini
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("product user");
  res.status(200).json(orders);
});

// visualizza singolo ordine
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("product user");
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

// modifica ordine
const updateOrder = asyncHandler(async (req, res) => {
  const { product, user, date } = req.body;
  if (!product || !user || !date) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  await updatedOrder.populate("product user");
  res.status(201).json(updatedOrder);
});

// cancella ordine
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("product user");
  if (!order) {
    throw new Error("Order not found");
  }
  await order.deleteOne();
  res.status(200).json(order);
});

// visualizza per prodotti

module.exports = { getOrders, getOrder, createOrder, updateOrder, deleteOrder };
