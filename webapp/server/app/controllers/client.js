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

  app.route('/api/v1/client/offer')
    .get((req, res) => {
      let options = {
        skip: +req.param('skip'),
        take: +req.param('take'),
        reverse: req.param('reverse'),
      };
      if (req.param('search')) options.search = req.param('search');
      if (req.param('country')) options.country = req.param('country');
      if (req.param('from')) options.from = req.param('from');
      if (req.param('to')) options.to = req.param('to');
      if (req.param('last')) options.last = req.param('last');
      if (req.param('type')) options.type = req.param('type');

      core.client.getOffers(req.user, options)
        .then(client => res.status(200).json(client))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/:offerId/reservation')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.reservation(req.user, req.body, req.params.offerId)
        .then(client => res.status(200).json(client))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/:bookingId/invoice')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.createInvoice(req.user, req.body, req.params.bookingId)
        .then(invoice => res.status(200).json(invoice))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/invoices')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.getInvoices(req.user)
        .then(invoices => res.status(200).json(invoices))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/:invoiceId/payment')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.getOrder(req.user, req.params.invoiceId)
        .then(payment => res.status(200).json(payment))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.payment(req.user, req.body, req.params.invoiceId, req.connection.remoteAddress)
        .then(payment => res.status(200).json(payment))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/:bookingId/review')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.createReview(req.user, req.body, req.params.bookingId)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/client/:bookingId/rating')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.client.createRating(req.user, req.body, req.params.bookingId)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(err.status || 500).json(err))
    });
  // app.route('/api/v1/client/:offerId/reservation/update')
  //   .put((req, res) => {
  //     core.client.update(req.user, req.body, req.params.bookingId)
  //       .then(invoice => res.status(200).json(invoice))
  //       .catch(err => res.status(err.status || 500).json(err))
  //   });

};

