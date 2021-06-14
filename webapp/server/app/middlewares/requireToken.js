//
// Require Login
//

'use strict';

var passport = require('passport');

function getMiddleware(fail) {
  return function (req, res, next) {
    if (req.user) {
      next();
      return;
    }
    if (req.headers && req.headers.authorization) {
      var parts = req.headers.authorization.split(' ');
      if (parts.length === 2) {
        var scheme = parts[0],
          auth;

        if (/^Bearer$/i.test(scheme)) {
          return next();
        }
      }
    }

    fail(req, res);
  };
}

module.exports = getMiddleware(function (req, res) {
  res.sendStatus(401);
});
