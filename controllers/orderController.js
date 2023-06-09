const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

// @desc Get all orders
// @route GET api/order
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("product user");
  res.status(200).json(orders);
});

// @desc Get a order
// @route Get api/orders/:id
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("product user");
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.status(200).json(order);
});

// @desc Create a new order
// @route Post api/orders
const createOrder = asyncHandler(async (req, res) => {
  const { product, user, date } = req.body;
  if (!product || !user || !date) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const order = await Order.create(req.body);
  await order.populate("product user");
  res.status(201).json(order);
});

// @desc Update a order
// @route PUT api/orders/:id
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  const { product, user, date } = req.body;
  if (!product || !user || !date) {
    res.status(400);
    throw new Error("update all fields of the order");
  }
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  await updatedOrder.populate("product user");
  res.status(200).json(updatedOrder);
});

// @desc Delete a order
// @route DELETE api/orders/:id
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("product user");
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  await order.deleteOne();
  res.status(200).json(order);
});

// @desc Get all orders with a product
// @route GET api/orders/by-product/:productId
const getOrderByProduct = asyncHandler(async (req, res) => {
  const product = req.params.product;
  const order = await Order.find({ product: product }).populate("product user");
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.status(200).json(order);
});

// @desc Get all orders with a date
// @route GET api/orders/by-date/:date
const getOrderByDate = asyncHandler(async (req, res) => {
  const date = req.params.date;
  const order = await Order.find({ date: date }).populate("product user");
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.status(200).json(order);
});

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderByProduct,
  getOrderByDate,
};
