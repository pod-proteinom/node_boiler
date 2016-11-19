'use strict';

const conf = require('config');
const winston = require('winston');

let logger = new winston.Logger({
	transports: [
		new winston.transports.Console(conf.logger)
	]
});

logger.stream = {
    write: function(msg){
        logger.info(msg);
    }
};

module.exports = logger;