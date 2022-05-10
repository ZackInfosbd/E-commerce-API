const User = require('../Models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;

  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });

  res.status(StatusCodes.OK).json({ msg: 'success', user });
};

const login = async (req, res) => {
  res.send('login route');
};

const logout = async (req, res) => {
  res.send('logout route');
};

module.exports = {
  register,
  login,
  logout,
};
