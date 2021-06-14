const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrganiserSchema = new mongoose.Schema({
  userId:{
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  type: {
    type: String,
    enum: ['company', 'freelancer'],
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },

});

OrganiserSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    type: this.type,
    name: this.name,
    description: this.description,
  }
});

module.exports = mongoose.model('Organiser', OrganiserSchema);
