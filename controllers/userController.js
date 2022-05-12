const User = require('../Models/User');
const CustomErrors = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: 'user' }).select('-password');
  // 1.

  res.status(StatusCodes.OK).json({ nHits: users.length, users });
};

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password');

  if (!user) {
    throw new CustomErrors.NotFoundError(
      `No user with this id ${req.params.id}`
    );
  }

  res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
  res.send('show Current user');
};
const updateUser = async (req, res) => {
  res.send(req.body);
};
const updateUserPassword = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};

/*
1. 
const usersResult = users.map((user) => {
    const { _id, name, email, role } = user;
    if (role !== 'admin') {
      return { _id, name, email, role };
    }
  });
*/
