'use strict';

const expressJwt = require('express-jwt');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const settings = require('./../config');
const multer = require('multer');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path');

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


  passport.use(new FacebookStrategy({
      clientID: settings.facebook.clientID,
      clientSecret: settings.facebook.clientSecret,
      callbackURL: settings.appURL + '/api/v1/user/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'email', 'first_name', 'last_name', 'gender', 'education', 'experience', 'picture.type(large)'],
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      console.log('request', request);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      cb(null, profile);
    }
  ));

  passport.use(new GoogleStrategy({
      clientID: settings.google.clientID,
      clientSecret: settings.google.clientSecret,
      callbackURL: settings.appURL + '/api/v1/user/auth/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      console.log('request', request);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      cb(null, profile);
    }
  ));

  app.route('/api/v1/user')
    .post((req, res) => {
      core.user.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/profile')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.user.getProfile(req.user)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .put(middlewares.reqUser, (req, res) => {
      core.user.updateProfile(req.user, req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/auth')
    .post((req, res) => {
      if (!req.body.email || !req.body.password) return res.status(400).json({message: errorMessages.BAD_DATA});
      core.user.auth(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.get('/api/v1/user/auth/facebook', function (req, res, next) {
    console.log('req.query.offerId', req.query.offerId)
    passport.authenticate('facebook', {
      scope: ['email', 'user_friends', 'manage_pages'],
      state: req.query.offerId
    })(req, res, next);
  });

  app.get('/api/v1/user/auth/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login'}),
    function (req, res) {
      console.log('3.req.query', req.query)
      console.log('req.user', req.user);
      console.log('req.profile', req.profile);
      console.log('req.query.offerId', req.query.offerId);
      return core.user.findOrCreate(req.user, 'facebook', req.query.state).then(user => {
        res.cookie('token', user.token);
        res.redirect('/');
      })
        .catch(err => {
          if (err instanceof AppError) throw err;
          throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
        })
    });


  app.get('/api/v1/user/auth/google', function (req, res, next) {
    console.log('req.query.offerId', req.query.offerId)
    passport.authenticate('google', {
      scope: ['email', 'profile'],
      state: req.query.offerId
    })(req, res, next);
  });

  app.get('/api/v1/user/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
      console.log('3.req.query', req.query)
      console.log('req.user', req.user);
      console.log('req.profile', req.profile);
      console.log('req.query.offerId', req.query.offerId);
      return core.user.findOrCreate(req.user, 'google', req.query.state).then(user => {
        res.cookie('token', user.token);
        res.redirect('/');
      })
        .catch(err => {
          if (err instanceof AppError) throw err;
          throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
        })
    });


  app.route('/api/v1/user/confirmMail')
    .get((req, res) => {
      core.user.confirmMail(req.query.token)
        .then(user => res.status(200).redirect('/login'))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/confirmOffer')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put( middlewares.reqUser, (req, res) => {
      core.user.confirmOffers(req.user, req.body.offerParticipantsId)
        .then(offers => res.status(200).json(offers))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/programmer')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.user.getProgrammers(req.user)
        .then(programmer => res.status(200).json(programmer))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqUser, (req, res) => {
      core.user.createProgrammer(req.user, req.body)
        .then(programmer => res.status(200).json(programmer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/organiser')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.user.getOrganisers(req.user)
        .then(organisers => res.status(200).json(organisers))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqUser, (req, res) => {
      core.user.createOrganiser(req.user, req.body)
        .then(organiser => res.status(200).json(organiser))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/programmerCategories')
    .get((req, res) => {
      core.user.getProgrammerCategories()
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/documents')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(fileUpload, middlewares.cleanupFiles, middlewares.reqUser, (req, res) => {
      core.user.addDocuments(req.user, req.body, req.files)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/eventTypes')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.user.getEventTypes(req.user)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/updatePassword')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqUser, (req, res) => {
      core.user.updatePassword(req.user, req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/photo')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(fileUpload, middlewares.cleanupFiles, middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.user.addPhotos(req.user, req.files)
        .then(userPhotos => res.status(200).json(userPhotos))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .get(middlewares.reqUser, middlewares.reqDeserializeUser, (req, res) => {
      core.user.getPhotos(req.user, req.query)
        .then(userPhotos => res.status(200).json(userPhotos))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/photo/:id')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .delete(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.user.deletePhoto(req.user, req.params.id)
        .then(userPhoto => res.status(200).json(userPhoto))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/myLikeOffers')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.user.myLikeOffers(req.user)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:userId/reviews')
    .get((req, res) => {
      core.user.userReviews(req.params.userId)
        .then(reviews => res.status(200).json(reviews))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/offer/:offerId/reviews')
    .get((req, res) => {
      core.user.reviewsOffer(req.params.offerId)
        .then(offer => res.status(200).json(offer))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:id')
    .get((req, res) => {
      core.user.get(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:id/offers')
    .get((req, res) => {
      core.offer.getOffers({id: req.params.id})
        .then(offers => res.status(200).json(offers))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:id/profilePhoto')
    .post(fileUpload, middlewares.cleanupFiles, (req, res) => {
      core.user.addProfilePhoto(req.params.id, req.files)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .delete((req, res) => {
      core.user.deleteProfilePhoto(req.params.id)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/photo/:id/coverPhoto')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.user.coverPhoto(req.user, req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:id/sendSms')
    .get((req, res) => {
      core.user.confirmPhone(req.params.id, req.query.phone)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/user/:offerId/like')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqDeserializeUser, middlewares.reqUser, (req, res) => {
      core.user.likeOffer(req.user, req.params.offerId)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/testEmail')
    .post((req, res) => {
      core.user.testEmail()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });


};

