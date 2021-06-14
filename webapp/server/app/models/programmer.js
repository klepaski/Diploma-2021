const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProgrammerSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  isFreelancer: {
    type: Boolean,
    trim: true
  },
  numberOfPeople: {
    type: Number,
    trim: true
  },
  thumbPath: {
    type: String,
    trim: true
  },
  userpicPath:{
    type: String,
    trim: true
  },
  rating:{
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true,
    default: 'programmer'
  },
  category: {
    type: String,
    trim: true
  },
  subCategory: {
    type: String,
    trim: true
  },
  earnings: {
    type: Number,
    trim: true
  }
});

ProgrammerSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    title: this.title,
    description: this.description,
    isFreelancer: this.isFreelancer,
    numberOfPeople: this.numberOfPeople,
    thumbPath: this.thumbPath,
    userpicPath: this.userpicPath,
    rating: this.rating,
    role: this.role,
    category: this.category,
    subCategory: this.subCategory,
    earnings: this.earnings,
  }
});

module.exports = mongoose.model('Programmer', ProgrammerSchema);
