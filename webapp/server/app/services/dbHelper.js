const mongoose = require('mongoose');
const errorMessages = require('./errorMessages');
const AppError = require('./error');
const fs = require('fs');

DbHelper = {
  createProgrammerCategories: function (category, arraySubCategory) {
    const ProgrammerCategories = mongoose.model('ProgrammerCategories');
    return ProgrammerCategories.findOne({
      category: category
    })
      .then(existCategory => {
        if (existCategory) return;
        return ProgrammerCategories.create({
          category: category,
          subCategory: arraySubCategory
        })
      })
      .catch(err => {
        if (err instanceof AppError) throw err;
        throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
      })
  },
  createAllProgrammerCategoy: function () {
    const fileContent = fs.readFileSync("./server/app/services/db/programmerCategories.txt", "utf8");
    let categoriesWithSubCategories = fileContent.split('\n- ');
    categoriesWithSubCategories.forEach(categorySubCategories => {
      let categorySubCategoriesArray = categorySubCategories.split('\n-- ');
      let category = categorySubCategoriesArray[0];
      let subCategoriesArray = categorySubCategoriesArray
        .slice(1, categorySubCategoriesArray.length)
        .map(subCategory => subCategory.replace('\r', ''));
      this.createProgrammerCategories(category, subCategoriesArray);
    })
  }
};

module.exports = DbHelper;
