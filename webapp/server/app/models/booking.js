const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(settings.database.uri);

autoIncrement.initialize(connection);

const BookingSchema = new mongoose.Schema({
  clientId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  offerCreatorId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    required: true
  },
  offerSnapshotId: {
    type: ObjectId,
    ref: 'OfferSnapshot',
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ['pending', 'approve', 'done', 'decline', 'expired']
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  location: {
    type: String,
    trim: true
  },
  locationDetails: {
    type: String,
    trim: true
  },
  startTime: {
    type: String,
    trim: true
  },
  additionalTerms: {
    type: String,
    trim: true
  },
  number: {
    type: Number,
    sparse: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});


BookingSchema.plugin(autoIncrement.plugin, {model: 'Booking', field: 'number', startAt: 1});

BookingSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerCreatorId: this.offerCreatorId,
    clientId: this.clientId,
    offerId: this.offerId,
    offerSnapshotId: this.offerSnapshotId,
    status: this.status,
    startDate: this.startDate,
    endDate: this.endDate,
    location: this.location,
    locationDetails: this.locationDetails,
    startTime: this.startTime,
    additionalTerms: this.additionalTerms,
    number: this.number,
    createdAt: this.createdAt,
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
