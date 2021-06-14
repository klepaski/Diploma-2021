//
// Require Login
//

'use strict';

function getMiddleware(fail) {
  return function (req, res, next) {
    if (req.user && ~req.user.role.indexOf('organiser')) {
      next();
      return;
    }
    fail(req, res);
  };
}

module.exports = getMiddleware(function (req, res) {
  res.sendStatus(401);
});
