const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const CalendarSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    trim: true
  },
  bookingId: {
    type: ObjectId,
    ref: 'Booking',
    trim: true
  },
  clientId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  status:{
    type: String,
    trim: true,
    enum: ['disabled', 'reserved'],
  },
  pricePerDay: {
    type: Number,
  }
});

CalendarSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.offerId,
    bookingId: this.bookingId,
    clientId: this.clientId,
    date: this.date,
    status: this.status,
    pricePerDay: this.pricePerDay,
  }
});

module.exports = mongoose.model('Calendar', CalendarSchema);
