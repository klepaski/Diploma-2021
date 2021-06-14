const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const InvoiceSchema = new mongoose.Schema({
  clientId: {
    type: ObjectId,
    ref: 'User',
    required: true,
    trim: true
  },
  bookingId: {
    type: ObjectId,
    ref: 'Booking',
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  currency: {
    type: String,
    trim: true,
    required: true,
  },
  paymentAmount: {
    type: Number,
    trim: true,
    required: true,
  },
  countReservedDays: {
    type: Number,
    trim: true,
    required: true,
  },
  pricePerAct: {
    type: Number,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
    default: 'unPaid',
    enum: ['unPaid', 'paid']
  },
  dateOfPayment: {
    type: Date,
  },
});

InvoiceSchema.method('toJSON', function () {
  return {
    id: this._id,
    clientId: this.clientId,
    bookingId: this.bookingId,
    createdAt: this.createdAt,
    currency: this.currency,
    paymentAmount: this.paymentAmount,
    countReservedDays: this.countReservedDays,
    pricePerAct: this.pricePerAct,
    status: this.status,
    dateOfPayment: this.dateOfPayment
  }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
