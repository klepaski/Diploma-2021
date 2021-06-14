const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const OfferParticipantsSchema = new mongoose.Schema({
  offerId: {
    type: ObjectId,
    ref: 'Offer',
    required: true,
    trim: true
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  confirm: {
    type: Boolean,
    default: false
  },

});

OfferParticipantsSchema.method('toJSON', function () {
  return {
    id: this._id,
    offerId: this.offerId,
    email: this.email,
    confirm: this.confirm,
    userId: this.userId,
  }
});

module.exports = mongoose.model('OfferParticipants', OfferParticipantsSchema);
