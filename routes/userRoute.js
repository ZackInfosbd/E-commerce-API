const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.get('/', showCurrentUser);
router.patch('/:id', updateUser);
router.patch('/:id', updateUserPassword);

module.exports = router;
