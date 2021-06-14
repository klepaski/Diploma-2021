const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const OfferDetailsSnapshotSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'OfferSnapshot',
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  videoUrl: {
    type: Array,
    trim: true
  },
  earnings: {
    type: Number,
    trim: true
  }
});

OfferDetailsSnapshotSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.userId,
    description: this.description,
    videoUrl: this.videoUrl,
    earnings: this.earnings
  }
});

module.exports = mongoose.model('OfferDetailsSnapshot', OfferDetailsSnapshotSchema);
