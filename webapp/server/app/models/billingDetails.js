const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const BillingDetailsSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  }
});

BillingDetailsSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    title: this.title,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phone: this.phone
  }
});

module.exports = mongoose.model('BillingDetails', BillingDetailsSchema);
