const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const OfferPhotoSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  photoUrl: {
    type: String,
    trim: true,
    required: true
  },
  coverPhoto: {
    type: Boolean,
    trim: true,
    default: false
  }
});

OfferPhotoSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.offerId,
    description: this.description,
    photoUrl: this.photoUrl
  }
});

module.exports = mongoose.model('OfferPhoto', OfferPhotoSchema);
