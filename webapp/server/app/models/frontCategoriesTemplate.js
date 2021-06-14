const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const FrontCategoriesTemplateSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
    enum: ['int', 'bool', 'input', 'list']
  },
  description: {
    type: String,
    trim: true,
  },
  step: {
    type: Number,
  },
  index: {
    type: Number,
  },
  defaultValue: {
    type: String,
    trim: true,
  },
  possibleValues: [],
  units: {
    type: String,
    trim: true,
  },
});

FrontCategoriesTemplateSchema.method('toJSON', function () {
  return {
    id: this._id,
    title: this.title,
    type: this.type,
    description: this.description,
    step: this.step,
    index: this.index,
    defaultValue: (this.defaultValue === 'true' || this.defaultValue === 'false') ? this.defaultValue === 'true' : this.defaultValue,
    possibleValues: this.possibleValues,
    units: this.units
  }
});

module.exports = mongoose.model('FrontCategoriesTemplate', FrontCategoriesTemplateSchema);
