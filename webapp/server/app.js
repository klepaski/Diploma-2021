const express = require('express.oi'),
  mongoose = require('mongoose'),
  path = require('path'),
  _ = require('lodash'),
  all = require('require-tree'),
  bodyParser = require('body-parser'),
  settings = require('./app/config'),
  controllers = all(path.resolve('./server/app/controllers')),
  models = all(path.resolve('./server/app/models')),
  core = require('./app/core/index'),
  middlewares = all(path.resolve('./server/app/middlewares'));

const filesHelper = require('./app/services/filesHelper');

filesHelper.createDir('./', 'uploads');
filesHelper.createDir('./uploads', 'projectPortfolio');
filesHelper.createDir('./uploads', 'clients');
filesHelper.createDir('./uploads', 'verificationDataClient');
filesHelper.createDir('./uploads', 'eventPhoto');
filesHelper.createDir('./uploads', 'user');
filesHelper.createDir('./uploads', 'offerPhoto');

dbHelper.createAllProgrammerCategoy();

const app = express().http().io();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/uploads', express.static(__dirname + '/uploads', {
  maxAge: '364d'
}));

_.each(controllers, (controller) => {
  controller.apply({
    app: app,
    core: core,
    models: models,
    controllers: controllers,
    middlewares: middlewares
  });
});


function startApp() {
  app.listen(settings.http.port);
  console.log('start programmer-booking, port:' + settings.http.port);
}

mongoose.connect(settings.database.uri)
  .then(() => startApp())
  .catch(err => console.error('connection error to mongo', err));
