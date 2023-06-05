// @desc Get all products
// @route GET api/products
// access public
const getUsers = async (req, res) => {
  res.status(200).json({ message: "tutti users" });
};

// @desc Create new product
// @route POST api/products
// access public
const createUser = async (req, res) => {
  res.status(200).json({ message: "crea user" });
};

// @desc Get a product
// @route GET api/products/:id
// access public
const getUser = async (req, res) => {
  res.status(200).json({ message: "visualizza un user" });
};

// @desc Get all products
// @route GET api/products
// access public
const updateUser = async (req, res) => {
  res.status(200).json({ message: "update user" });
};

// @desc Get all products
// @route GET api/products
// access public
const deleteUser = async (req, res) => {
  res.status(200).json({ message: "delete user" });
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
