const User = require('../Models/User');
const Product = require('../Models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createReview = async (req, res) => {
  res.send(' create Review route');
};

const getAllReviews = async (req, res) => {
  res.send(' get all Reviews route');
};

const getSingleReview = async (req, res) => {
  res.send(' get single Review route');
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
