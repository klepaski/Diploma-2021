'use strict';

const expressJwt = require('express-jwt');
const errorMessages = require('../services/errorMessages');
const settings = require('./../config');
const multer = require('multer');
const fileUpload = multer({
  limits: {
    files: 500,
    fileSize: settings.maxFileSize
  },
  storage: multer.diskStorage({})
}).any();

module.exports = function () {

  const app = this.app;
  const core = this.core;
  const middlewares = this.middlewares;

  app.route('/api/v1/admin/users')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqAdmin, (req, res) => {
      core.admin.getUsers(req.user)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/programmerCategories')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqAdmin, (req, res) => {
      core.admin.createProgrammerCategories(req.files[0])
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/uploadProgrammerCategories')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqAdmin, (req, res) => {
      core.admin.uploadProgrammerCategories(req.files[0])
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/createEventTypes')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqAdmin, (req, res) => {
      core.admin.createEventTypes(req.body)
        .then(typeEvents => res.status(200).json(typeEvents))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/ping')
    .get((req, res) => {
      res.status(200).json({'status_v5.0': 'ok'})
    });


  app.route('/api/v1/admin/frontCategories')
    .get((req, res) => {
      let options = {};
      if (req.param('category')) options.category = req.param('category');
      if (req.param('step')) options.step = req.param('step');

      core.admin.getFrontCategoriesTemplateOld(options)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/frontCategoriesTemplates')
    .get((req, res) => {
      let options = {};
      if (req.param('category')) options.category = req.param('category');
      if (req.param('step')) options.step = req.param('step');

      core.admin.getLinksCategoriesToTemplate(options)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .put(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }), middlewares.reqAdmin, (req, res) => {
      core.admin.updateLinkCategoriesToTemplate(req.body.templates, req.body.сategoryId)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/frontTemplates')
    .get((req, res) => {
      let options = {};
      if (req.param('category')) options.category = req.param('category');
      if (req.param('step')) options.step = req.param('step');

      core.admin.getFrontTemplates(options)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }), middlewares.reqAdmin, (req, res) => {
      core.admin.createFrontTemplate(req.body)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(req.body))
    })
    .put(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }), middlewares.reqAdmin, (req, res) => {
      core.admin.updateFrontTemplate(req.body)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .delete(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }), middlewares.reqAdmin, (req, res) => {
      core.admin.deleteFrontTemplate(req.body)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/frontCategories/csv')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqAdmin, (req, res) => {
      core.admin.uploadFrontCategoriesTemplate(req.files[0])
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/frontCategories/csv/:categoryId')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqAdmin, (req, res) => {
      core.admin.uploadFrontCategoriesTemplateAndUpdateCategory(req.files[0], req.params.categoryId)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/admin/newUploadProgrammerCategories')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqAdmin, (req, res) => {
      core.admin.newUploadProgrammerCategories(req.files[0])
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(err.status || 500).json(err))
    });
};

