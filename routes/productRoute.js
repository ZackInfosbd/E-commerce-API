const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController');

router.route('/').post(createProduct);
router.route('/').get(getAllProducts);
router.route('/:id').get(getSingleProduct);
router.route('/').patch(updateProduct);
router.route('/').delete(deleteProduct);
router.route('/uploadImage').post(uploadImage);

module.exports = router;
