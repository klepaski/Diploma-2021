const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const LikeSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true,
    trim: true
  },
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

LikeSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    offerId: this.offerId,
    createdAt: this.createdAt
  }
});

module.exports = mongoose.model('Like', LikeSchema);
