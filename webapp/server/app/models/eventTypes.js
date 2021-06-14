const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventTypesSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true
  },


});

EventTypesSchema.method('toJSON', function () {
  return {
    id: this._id,
    type: this.type,
  }
});

module.exports = mongoose.model('EventTypes', EventTypesSchema);
