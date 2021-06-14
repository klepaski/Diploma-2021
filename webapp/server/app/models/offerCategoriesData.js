const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const OfferCategoriesDataSchema = new mongoose.Schema({
  templateId: {
    type: ObjectId,
    ref: 'FrontCategoriesTemplate'
  },
  offerId: {
    type: ObjectId,
    ref: 'Offer'
  },
  value: {
    type: String,
    trim: true,
  }
});

OfferCategoriesDataSchema.method('toJSON', function () {
  return {
    id: this._id,
    templateId: this.templateId,
    offerId: this.offerId,
    value: this.value
  }
});

module.exports = mongoose.model('OfferCategoriesData', OfferCategoriesDataSchema);
