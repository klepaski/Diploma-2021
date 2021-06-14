const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EquipmentSchema = new mongoose.Schema({
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
  rentPeriod: {
    type: Date,
    trim: true
  },
  pricePerPeriod: {
    type: Number,
    trim: true
  }
});

EquipmentSchema.method('toJSON', function () {
  return {
    id: this._id,
    eventId: this.eventId,
    title: this.title,
    description: this.description,
    rentPeriod: this.rentPeriod,
    pricePerPeriod: this.pricePerPeriod
  }
});

module.exports = mongoose.model('Equipment', EquipmentSchema);
