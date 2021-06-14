const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const AccessSchema = new mongoose.Schema({
  clientId: {
    type: ObjectId,
    ref: 'Client',
    required: true,
    trim: true
  },
  programmerId: {
    type: ObjectId,
    ref: 'Programmer',
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

AccessSchema.method('toJSON', function () {
  return {
    id: this._id,
    clientId: this.clientId,
    programmerId: this.programmerId,
    createdAt: this.createdAt
  }
});

module.exports = mongoose.model('Access', AccessSchema);
