'use strict';

const settings = require('./../config');
const expressJwt = require('express-jwt');
const errorMessages = require('../services/errorMessages');
const express = require('express');
const fs = require('fs');

module.exports = function () {

  const app = this.app;
  const core = this.core;
  const middlewares = this.middlewares;

  app.route('/exportSwagger')
    .get((req, res) => {
      fs.createReadStream('apiDocumentation.json').pipe(res);
    });

  app.use('/api/doc',
    express.static(__dirname + './../../docs_api', {maxAge: '364d'})
  );

};
