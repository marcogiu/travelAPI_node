const Product = require("../models/productModel");

// @desc Get all products
// @route GET api/products
// access public
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// @desc Create new product
// @route POST api/products
// access public
const createProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) throw "Invalid";
  const product = await Product.create({
    name,
  });
  res.status(201).json(product);
};

// @desc Get a product
// @route GET api/products/:id
// access public
const getProduct = async (req, res) => {
  res.status(200).json({ message: "visualizza un prodotto" });
};

// @desc Get all products
// @route GET api/products
// access public
const updateProduct = async (req, res) => {
  res.status(200).json({ message: "update prodotto" });
};

// @desc Get all products
// @route GET api/products
// access public
const deleteProduct = async (req, res) => {
  res.status(200).json({ message: "delete prodotto" });
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
