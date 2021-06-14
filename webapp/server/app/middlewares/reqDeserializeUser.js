//
// Require Login
//

'use strict';
const mongoose = require('mongoose');
const AppError = require('../services/error');
const errorMessages = require('../services/errorMessages');

module.exports = function (req, res, next) {
  const User = mongoose.model('User');
  if (!req.user) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
  return User.findOne({_id: req.user.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      req.user = existUser.toJSON();
      next();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
    .catch(err => res.status(err.status || 500).json(err))
};
