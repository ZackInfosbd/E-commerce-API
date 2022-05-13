const Product = require('../Models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;

  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};
const getAllProducts = async (req, res) => {
  res.send(' get All Products route');
};
const getSingleProduct = async (req, res) => {
  res.send('get Single Product route');
};
const updateProduct = async (req, res) => {
  res.send('update Product route');
};
const deleteProduct = async (req, res) => {
  res.send('delete Product route');
};
const uploadImage = async (req, res) => {
  res.send('upload Image route');
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
