const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserCodeSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  confirmCode: {
    type: Number,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

UserCodeSchema.method('toJSON', function () {
  return {
    id: this._id,
    clientId: this.clientId,
    confirmCode: this.confirmCode,
    createdAt: this.createdAt
  }
});

module.exports = mongoose.model('UserCode', UserCodeSchema);
