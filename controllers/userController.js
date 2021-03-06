const User = require('../Models/User');
const CustomErrors = require('../errors');
const { StatusCodes } = require('http-status-codes');
const {
  createUserToken,
  attachCookiesToResponse,
  checkPermissions,
} = require('../utils');

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

  checkPermissions(req.user, user._id);

  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

// 2.
// update user with user.save()
const updateUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new CustomErrors.BadRequestError('Please provide correct values');
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.email = email;
  await user.save();

  const tokenUser = createUserToken(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new CustomErrors.BadRequestError('Please provide both values');
  }

  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);

  if (!isPasswordCorrect) {
    throw new CustomErrors.UnauthenticatedError('Invalid Credentials');
  }
  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Success! password updated' });
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

  2. update user with findOneAndUpdate

  const updateUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new CustomErrors.BadRequestError('Please provide correct values');
  }

  const user = await User.findOneAndUpdate(
    { _id: req.user.userId },
    { name, email },
    { new: true, runValidators: true }
  ).select('-password');

  const tokenUser = createUserToken(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};
*/
