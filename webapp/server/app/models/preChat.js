const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const autoIncrement = require('mongoose-auto-increment');
const settings = require('./../../app/config');
const connection = mongoose.createConnection(settings.database.uri);

autoIncrement.initialize(connection);

const PreChatSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    required: true
  },
  offerCreatorId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  clientId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  number: {
    type: Number,
    sparse: true,
    unique: true,
  },
});

PreChatSchema.plugin(autoIncrement.plugin, {model: 'PreChat', field: 'number', startAt: 1});


PreChatSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.offerId,
    offerCreatorId: this.offerCreatorId,
    clientId: this.clientId,
    number: this.number,
  }
});

module.exports = mongoose.model('PreChat', PreChatSchema);
