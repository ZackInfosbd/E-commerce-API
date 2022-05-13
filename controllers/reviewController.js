const User = require('../Models/User');
const Product = require('../Models/Product');
const Review = require('../Models/Review');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { checkPermissions } = require('../utils');

const createReview = async (req, res) => {
  const { product: productId, rating, title, comment } = req.body;

  const isValidproduct = await Product.findOne({ _id: productId });

  if (!rating || !title || !comment) {
    throw new CustomError.BadRequestError('Please provide all the values');
  }

  if (!isValidproduct) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  const userAlreadyReviewed = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });

  if (userAlreadyReviewed) {
    throw new CustomError.BadRequestError(
      'You have already reviewed the product'
    );
  }

  req.body.user = req.user.userId;

  const review = await Review.create(req.body);

  res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});

  res.status(StatusCodes.OK).json({ reviews });
};

const getSingleReview = async (req, res) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new CustomError.NotFoundError(`
    No review with id : ${reviewId}
    `);
  }

  res.status(StatusCodes.OK).json({ review });
};

const updateReview = async (req, res) => {
  res.send(' update Review route');
};

const deleteReview = async (req, res) => {
  res.send(' delete Review route');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
