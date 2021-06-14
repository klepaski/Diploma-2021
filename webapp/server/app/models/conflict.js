const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(settings.database.uri);

autoIncrement.initialize(connection);

const ConflictSchema = new mongoose.Schema({
  conflictNumber: {
    type: Number,
    sparse: true,
    unique: true,
  },
  bookingId: {
    type: ObjectId,
    ref: 'Booking',
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ConflictSchema.plugin(autoIncrement.plugin, {model: 'Conflict', field: 'conflictNumber', startAt: 1});

ConflictSchema.method('toJSON', function () {
  return {
    id: this._id,
    conflictNumber: this.conflictNumber,
    bookingId: this.bookingId,
    description: this.description,
    createdAt: this.createdAt
  }
});

module.exports = mongoose.model('Conflict', ConflictSchema);
