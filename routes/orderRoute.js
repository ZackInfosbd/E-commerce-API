const express = require('express');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const router = express.Router();
const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require('../controllers/orderController');

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin'), getAllOrders)
  .post(authenticateUser, createOrder)
  .patch(authenticateUser, updateOrder);

router.route('/:id').get(authenticateUser, getSingleOrder);

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

module.exports = router;
