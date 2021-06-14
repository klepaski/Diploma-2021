const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LocationSchema = new mongoose.Schema({
  programmerId: {
    type: ObjectId,
    ref: 'Programmer',
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
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
  address:{
    type: String,
    trim: true
  }
});

LocationSchema.method('toJSON', function () {
  return {
    id: this._id,
    programmerId: this.programmerId,
    title: this.title,
    description: this.description,
    country: this.country,
    state: this.state,
    city: this.city,
    address: this.address
  }
});

module.exports = mongoose.model('Location', LocationSchema);
