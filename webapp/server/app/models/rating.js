const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const RatingSchema = new mongoose.Schema({
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
  rating: {
    type: Number,
    min: 0,
    max: 10,
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

RatingSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    createdAt: this.createdAt,
    rating: this.rating,
    offerId: this.offerId,
  }
});

module.exports = mongoose.model('Rating', RatingSchema);
