const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const glob = require('glob');

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const server = next({ dev })
const handle = server.getRequestHandler()

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nextjs-express-boilerplate'
const PORT = process.env.PORT || 3005

const routes = require('./../routes')
const handler = routes.getRequestHandler(server)



server.prepare().then(() => {
        app.use(cookieParser())
        // Parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
        // Parse application/json
        app.use(bodyParser.json({limit: '50mb'}));

        // Allows for cross origin domain request:
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        // app.get('/', function (req, res, next) {
        //     next()
        // });


        // API routes
        const rootPath = require('path').normalize(__dirname + '/..');
        glob.sync(rootPath + '/server/app/routes/*.js').forEach(controllerPath => require(controllerPath)(app));


        server.prepare().then(() => {
            app.use(handler).listen(PORT, function () {
                console.log(`App running on http://localhost:${PORT}/\nAPI running on http://localhost:${PORT}/api/`)
            });
        })

})
