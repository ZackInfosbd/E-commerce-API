const Product = require('../Models/Product');

const createProduct = async (req, res) => {
  res.send('create product route');
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
