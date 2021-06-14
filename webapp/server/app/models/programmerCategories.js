const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const settings = require('./../config');

const ProgrammerCategoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
  },
  parentCategory: {
    type: ObjectId,
    ref: 'ProgrammerCategories',
  },
  params: {
    type: Array,
    trim: true
  },

  templates: [{
    templateId: {
      type: ObjectId,
      ref: 'FrontCategoriesTemplate'
    },
    order: {
      type: Number
    },
    require: {
      type: Boolean,
      default: false
    },
    main: {
      type: Number
    }
  }],

  unitOfMeasure: {
    type: Array,
    trim: true
  }
});

ProgrammerCategoriesSchema.method('toJSON', function () {
  return {
    id: this._id,
    category: this.category,
    parentCategory: this.parentCategory,
    templates: this.templates
  }
});

module.exports = mongoose.model('ProgrammerCategories', ProgrammerCategoriesSchema);
