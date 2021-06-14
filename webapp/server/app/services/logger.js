var logger = require('winston');

logger.addColors({debug: 'green', info: 'cyan', silly: 'magenta', warn: 'yellow', error: 'red'});
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {level: 'debug', colorize: true, prettyPrint: true});

module.exports = logger;