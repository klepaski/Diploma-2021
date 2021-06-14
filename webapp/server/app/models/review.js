const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const ReviewSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    trim: true
  },
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    required: true
  },
  bookingId: {
    type: ObjectId,
    ref: 'Booking',
    required: true
  },
});

ReviewSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    createdAt: this.createdAt,
    text: this.text,
    offerId: this.offerId,
    bookingId: this.bookingId,
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
