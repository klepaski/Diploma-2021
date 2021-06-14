const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventOfferSchema = new mongoose.Schema({
  eventId: {
    type: ObjectId,
    ref: 'Event',
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  discountRate: {
    type: Number,
    trim: true
  },
  discountAmount: {
    type: Number,
    trim: true
  }
});

EventOfferSchema.method('toJSON', function () {
  return {
    id: this._id,
    eventId: this.eventId,
    title: this.title,
    description: this.description,
    discountRate: this.discountRate,
    discountAmount: this.discountAmount
  }
});

module.exports = mongoose.model('EventOffer', EventOfferSchema);
