//
// Require Login
//

'use strict';

function getMiddleware(fail) {
  return function (req, res, next) {
    if (req.user && ~req.user.role.indexOf('user')) {
      next();
      return;
    }
    fail(req, res);
  };
}

module.exports = getMiddleware(function (req, res) {
  res.sendStatus(401);
});
