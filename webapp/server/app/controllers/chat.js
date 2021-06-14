'use strict';

const expressJwt = require('express-jwt');
const errorMessages = require('../services/errorMessages');
const settings = require('./../config');

module.exports = function () {
  const app = this.app;
  const core = this.core;
  const middlewares = this.middlewares;

  app.io.on('connection', function (socket) {
    socket.on('disconnect', function () {
      delete core.connection[socket.request.user._id];
    });

    core.connection[socket.request.user._id] = socket;
  });

  app.route('/api/v1/newMessages')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getNewMessages(req.user)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/preChat')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .post(middlewares.reqUser, (req, res) => {
      core.chat.createPreChat(req.user, req.body.offerId, req.body.text)
        .then(message => core.chat.sendMessage(message))
        .then(message => res.status(200).json(message))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/chat/:id')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getChat(req.param('id'), req.user)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/preChat/:id')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getPreChat(req.param('id'), req.user)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/chat/:id/messages')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getChatMessages(req.param('id'), req.user)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqUser, (req, res) => {
      core.chat.createMessage(req.param('id'), req.user, req.body.text)
        .then(message => core.chat.sendMessage(message))
        .then(message => res.status(200).json(message))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/preChat/:id/messages')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getPreChatMessages(req.param('id'), req.user)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    })
    .post(middlewares.reqUser, (req, res) => {
      core.chat.createPreChatMessage(req.param('id'), req.user, req.body.text)
        .then(message => core.chat.sendMessage(message))
        .then(message => res.status(200).json(message))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/chat/:id/message/:messageId')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqUser, (req, res) => {
      core.chat.updateMessageStatus(req.param('id'), req.param('messageId'), req.user, req.body.status)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/preChat/:id/message/:messageId')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqUser, (req, res) => {
      core.chat.updatePreChatMessageStatus(req.param('id'), req.param('messageId'), req.user, req.body.status)
        .then(messages => res.status(200).json(messages))
        .catch(err => res.status(err.status || 500).json(err))
    });


  app.route('/api/v1/chats')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      let options = {
        skip: + req.param('skip'),
        take: + req.param('take')
      };
      core.user.getBookings(req.user, options)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/unreadMessages')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .get(middlewares.reqUser, (req, res) => {
      core.chat.getUnreadMessages(req.user)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });

  app.route('/api/v1/chats/updateStatus')
    .all(expressJwt({
      secret: settings.server.secret, fail: function (req, res, next) {
        if (!req.headers.authorization) res.send(400, errorMessages.MISSING_AUTHORIZATION_HEADER);
        res.send(401);
      }
    }))
    .put(middlewares.reqUser, (req, res) => {
      core.chat.updateStatus(req.user, req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(err.status || 500).json(err))
    });


};
