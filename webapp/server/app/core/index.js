'use strict';

const EventEmitter = require('events').EventEmitter,
  util = require('util'),
  _ = require('lodash'),
  User = require('./user'),
  Client = require('./client'),
  Admin = require('./admin'),
  Offer = require('./offer'),
  Chat = require('./chat'),
  Sockets = require('./sockets/connections');

function Core() {
  EventEmitter.call(this);

  this.user = new User({
    core: this
  });
  this.client = new Client({
    core: this
  });
  this.admin = new Admin({
    core: this
  });
  this.offer = new Offer({
    core: this
  });

  this.chat = new Chat({
    core: this
  });
  this.connection = Sockets
}

util.inherits(Core, EventEmitter);

module.exports = new Core();
