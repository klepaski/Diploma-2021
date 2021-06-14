'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const filesHelper = require('../services/filesHelper');
const jwt = require('jsonwebtoken');
const settings = require('./../config');
const mailHelper = require('../services/mailHelper');
const fs = require('fs');
const xlsx = require('node-xlsx');
const csv = require('csvtojson');

function Admin(options) {
  this.core = options.core;
}

Admin.prototype.getUsers = function (creator) {
  const User = mongoose.model('User');
  return User
    .find()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.createProgrammerCategories = function (file) {
  let chain = Promise.resolve();
  const fileContent = fs.readFileSync(file.path, 'utf8');
  let categoriesWithSubCategories = fileContent.split('\n- ');
  let result = [];

  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  categoriesWithSubCategories.forEach(categorySubCategories => {
    chain = chain
      .then(res => {
        let categorySubCategoriesArray = categorySubCategories.split('\n-- ');
        let category = categorySubCategoriesArray[0];
        category = category.replace('\r', '').replace('\n', '');
        let subCategoriesArray = categorySubCategoriesArray
          .slice(1, categorySubCategoriesArray.length)
          .map(subCategory => subCategory.replace('\r', ''));
        return ProgrammerCategories.findOne({
          category: category
        })
          .then(existCategory => {
            if (existCategory) return;
            return ProgrammerCategories.create({
              category: category,
              subCategory: subCategoriesArray
            }).then(createdCategory => {
              result.push(createdCategory);
              console.log('createdCategory', createdCategory);
              return createdCategory;
            })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          });
      });
  });
  return chain.then(res => result)
};

Admin.prototype.uploadProgrammerCategories = function (file) {
  let chain = Promise.resolve();
  let massCategory = [];
  let category = '';
  let subcategory = [];
  let params = [];
  let unitOfMeasure = [];
  let result = [];

  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  const obj = xlsx.parse(fs.readFileSync(file.path));
  obj[0].data.forEach((str, index) => {
    chain = chain
      .then(res => {
        if (str[0] != null || index === obj[0].data.length - 1) {
          massCategory.push({
            category: category,
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
          category = '';
          subcategory = [];
          params = [];
          unitOfMeasure = [];
        }
        if (str[0] !== undefined) category = str[0];
        if (str[1] !== undefined) subcategory.push(str[1]);
        if (str[2] !== undefined) params.push(str[2]);
        if (str[3] !== undefined) unitOfMeasure.push(str[3]);
        if (index === obj[0].data.length - 1) {
          massCategory.push({
            category: str[0],
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
        }
      })
  });
  return chain.then(res => {
      massCategory.forEach(categories => {
        return ProgrammerCategories.findOne({
          category: categories.category
        })
          .then(existCategory => {
            if (existCategory) return;
            if (!categories.category) return;
            return ProgrammerCategories.create({
              category: categories.category,
              subCategory: categories.subCategory,
              params: categories.params,
              unitOfMeasure: categories.unitOfMeasure
            })
              .then(createdCategory => {
                result.push(createdCategory);
                return createdCategory;
              })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          });
      })
    }
  )
    .then(res => {
      console.log('res', res);
      console.log('result', result)
      return result;
    });
};

Admin.prototype.newUploadProgrammerCategories = function (file) {
  let chain = Promise.resolve();
  let massCategory = [];
  let category = '';
  let subcategory = [];
  let params = [];
  let unitOfMeasure = [];
  let result = [];

  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  const obj = xlsx.parse(fs.readFileSync(file.path));
  obj[0].data.forEach((str, index) => {
    chain = chain
      .then(res => {
        if (str[0] != null || index === obj[0].data.length - 1) {
          massCategory.push({
            category: category,
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
          category = '';
          subcategory = [];
          params = [];
          unitOfMeasure = [];
        }
        if (str[0] !== undefined) category = str[0];
        if (str[1] !== undefined) subcategory.push(str[1]);
        if (str[2] !== undefined) params.push(str[2]);
        if (str[3] !== undefined) unitOfMeasure.push(str[3]);
        if (index === obj[0].data.length - 1) {
          massCategory.push({
            category: str[0],
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
        }
      })
  });
  return chain.then(res => {
      console.log('massCategory', massCategory);
      massCategory.forEach(categories => {
        if (!categories.category) return;
        return ProgrammerCategories.create({
          category: categories.category
        })
          .then(existCategory => {
            categories.subCategory.forEach(subCategory => {
              if (!subCategory) return;
              return ProgrammerCategories.create({
                category: subCategory,
                parentCategory: existCategory.id,
                params: categories.params,
                unitOfMeasure: categories.unitOfMeasure
              })
                .then(createdCategory => {
                  result.push(createdCategory);
                  return createdCategory;
                })
            })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          });
      })
    }
  )
    .then(res => {
      console.log('res', res);
      console.log('result', result)
      return result;
    });
};

Admin.prototype.createEventTypes = function (params) {
  const EventTypes = mongoose.model('EventTypes');
  let chain = Promise.resolve();
  let result = [];
  params.type.forEach(type => {
    chain = chain
      .then(res => {
        return EventTypes.create({
          type: type
        }).then(existType => {
          result.push(existType);
          return existType;
        });
      })
      .catch(err => {
        if (err instanceof AppError) throw err;
        throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
      })
  });
  return chain.then(res => result)
};

Admin.prototype.getFrontCategoriesTemplateOld = function (params) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  const find = FrontCategoriesTemplate.find();
  if (params.category) find.where({category: params.category});

  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  let result = {};
  return ProgrammerCategories.findOne({_id: params.category})
    .populate('templates.templateId')
    .populate('parentCategory')
    .then(category => {
      if (params.step) {
        category = JSON.parse(JSON.stringify(category));
        category.templates = category.templates.filter(template => template.templateId.step === params.step);
        return category
      }
      return category;
    })
    .then(category => {
      result = category.toJSON();
      if (category.parentCategory) {
        return ProgrammerCategories.findOne({_id: category.parentCategory._id})
          .populate('templates.templateId')
          .then(parentCategory => {
            if (params.step) {
              parentCategory = JSON.parse(JSON.stringify(parentCategory));
              parentCategory.templates = parentCategory.templates.filter(template => template.templateId.step === params.step);
              result.parentCategory = parentCategory.toJSON();
              return result;
            }
            result.parentCategory = parentCategory.toJSON();
            return result;
          })
      }
      return result;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};


Admin.prototype.getLinksCategoriesToTemplate = function (params) {
  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  const find = ProgrammerCategories.find();
  if (params.category) find.where({category: params.category});

  return find
    .populate('templates.templateId')
    .populate({path: 'parentCategory', populate: {path: 'templates.templateId'}})
    .exec()
    .then(category => {
      if (params.step) {
        category = JSON.parse(JSON.stringify(category));
        category.templates = category.templates.filter(template => template.templateId.step === params.step);
        return category
      }
      return category;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.updateLinkCategoriesToTemplate = function (params, categoryId) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  let response = {
    success: [],
    errors: []
  };

  return ProgrammerCategories.findOne({_id: categoryId})
    .then(foundedCategory => {
      if (!foundedCategory) throw new AppError({status: 404, message: errorMessages.CATEGORY_NOT_FOUND});

      foundedCategory.templates = [];

      let chain = Promise.resolve();
      params.forEach(json => {
        chain = chain
          .then(() => FrontCategoriesTemplate.findOne({_id: json.templateId}))
          .then(template => {
            if (!template) throw new AppError({message: errorMessages.TEMPLATE_NOT_FOUND, err: json});
            foundedCategory.templates = foundedCategory.templates.concat([json]);
            response.success.push(json);
          })
          .catch(e => {
            if (e instanceof AppError) return response.errors.push(e);
            response.errors.push(new AppError({err: e}))
          })
      });
      return chain
        .then(() => foundedCategory.save())
        .then(() => response)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.getFrontTemplates = function (params) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  const find = FrontCategoriesTemplate.find();
  if (params.category) find.where({category: params.category});
  if (params.step) find.where({step: params.step});

  return find
    .exec()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.createFrontTemplate = function (params) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');

  return FrontCategoriesTemplate.create(params)
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.updateFrontTemplate = function (params) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  return FrontCategoriesTemplate.findOne({_id: params.id})
    .then(template => {
      if (!template) throw new AppError({message: errorMessages.TEMPLATE_NOT_FOUND});
      Object.keys(params).forEach(key => template.set(key, params[key]));//todo check params
      return template.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.deleteFrontTemplate = function (params) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  return FrontCategoriesTemplate.findOne({_id: params.id})
    .then(template => {
      if (!template) throw new AppError({message: errorMessages.TEMPLATE_NOT_FOUND});
      return template.remove();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};


Admin.prototype.uploadFrontCategoriesTemplate = function (file) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  let response = {
    success: [],
    errors: []
  };
  return csv().fromFile(file.path)
    .then(jsonArr => {
      let chain = Promise.resolve();
      jsonArr.forEach(json => {
        if (json.possibleValues) json.possibleValues = JSON.parse('[' + json.possibleValues + ']');
        else delete json.possibleValues;
        chain = chain
          .then(() => FrontCategoriesTemplate.create(json))
          .catch(e => {
            if (e instanceof AppError) return response.errors.push(e);
            response.errors.push(new AppError({err: e}))
          })
          .then(result => {
            if (result) response.success.push(result)
          })
      });
      return chain.then(() => response);
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.uploadFrontCategoriesTemplateAndUpdateCategory = function (file, id) {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  let response = {
    success: [],
    errors: []
  };

  return ProgrammerCategories.findOne({_id: id})
    .then(foundedCategory => {
      if (!foundedCategory) throw new AppError({status: 404, message: errorMessages.CATEGORY_NOT_FOUND});
      return csv().fromFile(file.path)
        .then(jsonArr => {
          let chain = Promise.resolve();
          jsonArr.forEach(json => {
            if (json.possibleValues) json.possibleValues = JSON.parse('[' + json.possibleValues + ']');
            else delete json.possibleValues;
            chain = chain
              .then(() => FrontCategoriesTemplate.create(json))
              .catch(e => {
                if (e instanceof AppError) return response.errors.push(e);
                response.errors.push(new AppError({err: e}))
              })
              .then(result => {
                if (result) {
                  if (json.order) json.id = result._id;
                  response.success.push(result)
                }
              })
          });
          return chain
            .then(() => {
              foundedCategory.templates = jsonArr.filter(json => json.id).sort((a, b) => a.order - b.order).map(json => {
                return {
                  templateId: json.id,
                  main: +json.main,
                  require: json.require && json.require !== '0' && json.require !== 'false'
                }
              });
              return foundedCategory.save();
            })
            .then(() => response)
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Admin.prototype.uploadProgrammerCategories = function (file) {
  let chain = Promise.resolve();
  let massCategory = [];
  let category = '';
  let subcategory = [];
  let params = [];
  let unitOfMeasure = [];
  let result = [];

  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  const obj = xlsx.parse(fs.readFileSync(file.path));
  obj[0].data.forEach((str, index) => {
    chain = chain
      .then(res => {
        if (str[0] != null || index === obj[0].data.length - 1) {
          massCategory.push({
            category: category,
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
          category = '';
          subcategory = [];
          params = [];
          unitOfMeasure = [];
        }
        if (str[0] !== undefined) category = str[0];
        if (str[1] !== undefined) subcategory.push(str[1]);
        if (str[2] !== undefined) params.push(str[2]);
        if (str[3] !== undefined) unitOfMeasure.push(str[3]);
        if (index === obj[0].data.length - 1) {
          massCategory.push({
            category: str[0],
            subCategory: subcategory,
            params: params,
            unitOfMeasure: unitOfMeasure
          });
        }
      })
  });
  return chain.then(res => {
      massCategory.forEach(categories => {
        return ProgrammerCategories.findOne({
          category: categories.category
        })
          .then(existCategory => {
            if (existCategory) return;
            if (!categories.category) return;
            return ProgrammerCategories.create({
              category: categories.category,
              subCategory: categories.subCategory,
              params: categories.params,
              unitOfMeasure: categories.unitOfMeasure
            })
              .then(createdCategory => {
                result.push(createdCategory);
                return createdCategory;
              })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          });
      })
    }
  )
    .then(res => {
      console.log('res', res);
      console.log('result', result)
      return result;
    });
};

module.exports = Admin;
