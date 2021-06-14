const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const CalendarSnapshotSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'OfferSnapshot',
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
  }
});

CalendarSnapshotSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.offerId,
    bookingId: this.bookingId,
    clientId: this.clientId,
    date: this.date,
    status: this.status
  }
});

module.exports = mongoose.model('CalendarSnapshot', CalendarSnapshotSchema);
