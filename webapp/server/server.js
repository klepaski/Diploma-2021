const express = require("express.oi");
const mongoose = require('mongoose'),
  path = require('path'),
  all = require('require-tree'),
  bodyParser = require('body-parser'),
  settings = require('./app/config'),
  controllers = all(path.resolve('./server/app/controllers')),
  models = all(path.resolve('./server/app/models')),
  core = require('./app/core/index'),
  middlewares = all(path.resolve('./server/app/middlewares')),
  connectMongo = require('connect-mongo/es5'),
  socketAuth = require('./app/core/sockets/auth'),
  passport = require('passport');

const MongoStore = connectMongo(express.session);

const filesHelper = require('./app/services/filesHelper'),
  dbHelper = require('./app/services/dbHelper');

filesHelper.createDir('./', 'uploads');
filesHelper.createDir('./uploads', 'projectPortfolio');
filesHelper.createDir('./uploads', 'clients');
filesHelper.createDir('./uploads', 'verificationDataClient');
filesHelper.createDir('./uploads', 'eventPhoto');
filesHelper.createDir('./uploads', 'user');
filesHelper.createDir('./uploads', 'offerPhoto');
filesHelper.createDir('./uploads', 'passport');
filesHelper.createDir('./uploads', 'document');
filesHelper.createDir('./uploads', 'userPhoto');

// dbHelper.createAllProgrammerCategoy();

const config = require('./app/config');
const next = require("next");
const PORT = config.http.port;
const DB_URl = settings.database.uri;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

let server = express();
const httpsEnabled = settings.https && settings.https.enable;
if (httpsEnabled) {
  server = express().https({
    key: fs.readFileSync(settings.https.key),
    cert: fs.readFileSync(settings.https.cert),
    passphrase: settings.https.passphrase
  }).io();
} else {
  server = express().http().io();
}
const routes = require('./../routes');
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    // server.use("/api", showRoutes);
    server.use(bodyParser.json({limit: '50mb', extended: true}));
    server.use(bodyParser.urlencoded({
      extended: false
    }));
    server.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }
      next();
    });
    server.use('/uploads', express.static('./uploads', {
      maxAge: '364d'
    }));
    server.use('/', express.static('./auth_verification', {
      maxAge: '364d'
    }));
    // Session
    const sessionStore = new MongoStore({
      url: settings.database.uri,
      autoReconnect: true
    });

    const session = {
      key: 'connect.sid',
      secret: settings.secrets.cookie,
      store: sessionStore,
      cookie: {secure: false, sameSite: false},
      resave: false,
      saveUninitialized: true
    };

    server.set('trust proxy', 1);

    passport.serializeUser(function (user, done) {
      done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      done(null, user);
    });
    server.use(passport.initialize());

    server.io.session(session);
    // Session end //todo mb delete

    server.io.use(socketAuth);

    Object.keys(controllers).forEach(key => controllers[key].apply({
      app: server,
      core: core,
      models: models,
      controllers: controllers,
      middlewares: middlewares
    }));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // API routes
    // const rootPath = require('path').normalize(__dirname + '/..');
    // glob.sync(rootPath + '/server/app/routes/*.js').forEach(controllerPath => require(controllerPath)(app));

    function startApp() {
      server.use(handler).listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on ${PORT}`);
      });
    }

    mongoose.connect(DB_URl)
      .then(() => startApp())
      .catch(err => console.error('connection error to mongo', err));


  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
