const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const projectPortfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  photoUrl:{
    type: Array,
    trim: true
  }
});

projectPortfolioSchema.method('toJSON', function () {
  return {
    id: this._id,
    name: this.name,
    description: this.description,
    photoUrl: this.photoUrl
  }
});

module.exports = mongoose.model('ProjectPortfolio', projectPortfolioSchema);
