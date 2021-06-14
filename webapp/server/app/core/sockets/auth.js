'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = function (socket, next) {
  if (socket.request._query.token) {
    jwt.verify(socket.request._query.token, settings.server.secret, {}, function (err, decoded) {
      if (err) {
        console.error('invalid_token', err);
        return next('Fail');
      } else {
        const User = mongoose.model('User');
        User.findById(decoded.id, function (err, user) {
          if (err) {
            console.error(err);
            return next('Fail');
          }
          if (!user) {
            console.log('USER.' + decoded.id + '.NOT.FOUND');
            return next('Fail');
          }
          socket.request.user = user;
          socket.request.user.loggedIn = true;
          socket.request.user.usingToken = true;
          next()
        });
      }
    })
  } else {
    next()
  }
};
