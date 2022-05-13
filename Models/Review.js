const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
      maxlength: [50, 'Please dont exceed 50 characters'],
    },
    comment: {
      type: String,
      required: false,
      maxlength: [250, 'Please dont exceed 250 characters'],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', ReviewSchema);
