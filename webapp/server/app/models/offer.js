const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../../app/config');
const connection = mongoose.createConnection(settings.database.uri);

autoIncrement.initialize(connection);

const OfferSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  programmerId: {
    type: ObjectId,
    ref: 'Programmer',
    trim: true
  },
  organiserId: {
    type: ObjectId,
    ref: 'Organiser',
    trim: true
  },
  category: {
    type: ObjectId,
    ref: 'ProgrammerCategories',
    trim: true
  },
  subCategory: {
    type: ObjectId,
    ref: 'ProgrammerCategories',
    trim: true
  },
  earnings: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  summary: {
    type: String,
    trim: true
  },
  numberOfPeople: {
    type: Number,
    trim: true,
  },
  description: {
    type: String,
    trim: true
  },
  type: {
    type: Array,
    trim: true
  },
  eventId: {
    type: ObjectId,
    ref: 'Event',
    trim: true
  },
  regulations: {
    type: Array,
    trim: true
  },
  details: {
    type: Array,
    trim: true
  },
  minNumberOfActs: {
    type: Number,
    trim: true
  },
  maxNumberOfActs: {
    type: Number,
    trim: true
  },
  daysBeforeBooking: {
    type: String,
    trim: true
  },
  timeOpenCalendar: {
    type: String,
    trim: true
  },
  discounts: [{
    numberDays: {
      type: Number,
      trim: true,
      // required: true
    },
    discount: {
      type: Number,
      trim: true,
      // required: true
    },
  }],
  avatarUrl: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
    enum: ['unpublished', 'open', 'reserved', 'done'],
    default: 'unpublished'
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  categoryOptions: [{
    type: ObjectId,
    ref: 'OfferCategoriesData'
  }],
  pricePerAct: {
    type: Number,
    trim: true
  },
  currency: {
    type: String,
    trim: true
  },
  typePrice: {
    type: String,
    enum: ['adapted', 'fixed'],
    trim: true
  },
  kickstart: {
    type: String,
    trim: true
  },
  step: {
    type: Number,
    default: 0
  },
  videoUrl: [{
    type: String,
    trim: true,
  }],
  descriptionWillDone: {
    type: String,
    trim: true
  },
  descriptionWillProvide: {
    type: String,
    trim: true
  },
  descriptionRequirements: {
    type: String,
    trim: true
  },
  descriptionNote: {
    type: String,
    trim: true
  },
  number: {
    type: Number,
    sparse: true,
    unique: true,
  },
  countLikes: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
});

OfferSchema.plugin(autoIncrement.plugin, {model: 'Offer', field: 'number', startAt: 1});


OfferSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    programmerId: this.programmerId,
    organiserId: this.organiserId,
    category: this.category,
    subCategory: this.subCategory,
    earnings: this.earnings,
    country: this.country,
    state: this.state,
    city: this.city,
    address: this.address,
    name: this.name,
    summary: this.summary,
    numberOfPeople: this.numberOfPeople,
    description: this.description,
    type: this.type,
    eventId: this.eventId,
    regulations: this.regulations,
    details: this.details,
    minNumberOfActs: this.minNumberOfActs,
    maxNumberOfActs: this.maxNumberOfActs,
    daysBeforeBooking: this.daysBeforeBooking,
    timeOpenCalendar: this.timeOpenCalendar,
    discounts: this.discounts,
    avatarUrl: this.avatarUrl,
    status: this.status,
    date: this.date,
    startDate: this.startDate,
    endDate: this.endDate,
    createdAt: this.createdAt,
    categoryOptions: this.categoryOptions,
    pricePerAct: this.pricePerAct,
    currency: this.currency,
    typePrice: this.typePrice,
    kickstart: this.kickstart,
    step: this.step,
    videoUrl: this.videoUrl,
    descriptionWillDone: this.descriptionWillDone,
    descriptionWillProvide: this.descriptionWillProvide,
    descriptionRequirements: this.descriptionRequirements,
    descriptionNote: this.descriptionNote,
    number: this.number,
    countLikes: this.countLikes,
    rating:  this.rating,
  }
});

module.exports = mongoose.model('Offer', OfferSchema);
