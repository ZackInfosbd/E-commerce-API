const Product = require('../Models/Product');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getAllOrders = async (req, res) => {
  res.send('get all orders route');
};

const getSingleOrder = async (req, res) => {
  res.send('get single order route');
};

const getCurrentUserOrders = async (req, res) => {
  res.send('get current user orders route');
};

const createOrder = async (req, res) => {
  res.send('create order route');
};

const updateOrder = async (req, res) => {
  res.send('update order route');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
