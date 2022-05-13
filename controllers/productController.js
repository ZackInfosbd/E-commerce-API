const Product = require('../Models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;

  const product = await Product.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Success! Product has been created', product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ nbHits: products.length, products });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`
    No product with id ${req.params.id}
    `);
  }

  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new CustomError.NotFoundError(`
    No product with id : ${productId}
    `);
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Success! Product has been updated', product });
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`
    No product with id : ${productId}
    `);
  }

  await product.remove();

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Success! Product has been deleted', product });
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