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

  app.route('/api/v1/offer')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.getOffers(req.user)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.createOffer(req.user, req.body)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offers')
    .get((req, res) => {
      core.offer.getAllOffers()
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offers/popularCategories')
    .get((req, res) => {
      core.offer.getPopularCategories()
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id')
    .all(expressJwt({
      secret: settings.server.secret, credentialsRequired: false, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get((req, res) => {
      core.offer.getOffer(req.user, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .delete(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.deleteOffer(req.user, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/copyOffer')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.copyOffer(req.user, req.body)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.updateOffer(req.user, req.params.id, req.body)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/categoryOptions')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.categoryOptions(req.user, req.params.id, req.body)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/details')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.createOfferDetails(req.user, req.body, req.files)
        .then(offerDetails => res.status(200).json(offerDetails))
        .catch(err => res.status(err.status || 500).json(err))
    });


  app.route('/api/v1/offer/:id/details')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.getOfferDetails(req.user, req.params.id)
        .then(offerDetails => res.status(200).json(offerDetails))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/details/photo')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addPhotos(req.user, req.body, req.files)
        .then(offerDetails => res.status(200).json(offerDetails))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .get(middlewares.reqOrganiserProgrammer, middlewares.reqDeserializeUser, (req, res) => {
      core.offer.getPhotos(req.user, req.query)
        .then(offerPhoto => res.status(200).json(offerPhoto))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/details/photo/:id')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.updatePhoto(req.user, req.body, req.params.id)
        .then(offerDetails => res.status(200).json(offerDetails))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .delete(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.deletePhoto(req.user, req.params.id)
        .then(offerPhoto => res.status(200).json(offerPhoto))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/setAvatar')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.updateAvatar(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });


  app.route('/api/v1/offer/:id/regulations')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addRegulations(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/performanceDetails')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addPerformanceDetails(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/calendar')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.getCalendar(req.user, req.params.id)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addCalendar(req.user, req.body, req.params.id)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/calendar/disabledDays')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.disabledDays(req.user, req.body, req.params.id)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/calendar/:calendarId')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.updateCalendar(req.user, req.body, req.params.id, req.params.calendarId)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .delete(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.deleteCalendar(req.user, req.params.id, req.params.calendarId)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/price')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addPrice(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/discounts')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.addDiscounts(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/inviteParticipants')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.inviteParticipants(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/approve')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.approve(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/decline')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.decline(req.user, req.body, req.params.id)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/offer/:id/calendar/:calendarId/price')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqOrganiserProgrammer, (req, res) => {
      core.offer.updateCalendarPrice(req.user, req.body, req.params.id, req.params.calendarId)
        .then(calendar => res.status(200).json(calendar))
        .catch(err => res.status(err.status || 500).json(err))
    });

};

