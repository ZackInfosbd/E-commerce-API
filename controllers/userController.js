const User = require('../Models/User');

const getAllUsers = async (req, res) => {
  res.send('get all users');
};
const getSingleUser = async (req, res) => {
  res.send('getSingleUser users');
};
const showCurrentUser = async (req, res) => {
  res.send('showCurrentUser users');
};
const updateUser = async (req, res) => {
  res.send('updateUser users');
};
const updateUserPassword = async (req, res) => {
  res.send('updateUserPassword users');
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
