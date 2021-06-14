const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const settings = require('./../../app/config');
const ObjectId = mongoose.Schema.Types.ObjectId;
const connection = mongoose.createConnection(settings.database.uri);

autoIncrement.initialize(connection);

const MessageSchema = new mongoose.Schema({
  preChatId: {
    type: ObjectId,
    ref: 'PreChat',
    required: false
  },
  bookingId: {
    type: ObjectId,
    ref: 'Booking',
    required: false
  },
  senderId: {
    type: ObjectId,
    ref: 'User',
    required: false
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ['pending', 'delivered', 'read']
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  deliveredDate: {
    type: Date
  },
  readDate: {
    type: Date
  },
  number: {
    type: Number,
    sparse: true,
    unique: true,
  },
});

MessageSchema.plugin(autoIncrement.plugin, {model: 'Message', field: 'number', startAt: 1});


MessageSchema.method('toJSON', function () {
  return {
    id: this._id,
    preChatId: this.preChatId,
    bookingId: this.bookingId,
    senderId: this.senderId,
    text: this.text,
    status: this.status,
    createDate: this.createDate,
    deliveredDate: this.deliveredDate,
    readDate: this.readDate,
    number: this.number,
  }
});

module.exports = mongoose.model('Message', MessageSchema);
