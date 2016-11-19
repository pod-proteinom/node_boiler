'use strict';

const conf = require('config');
const morgan = require('morgan');
const logger = require('modules/logger');

exports.init = (app) => {
	const NODE_ENV = process.env.NODE_ENV;
	if(NODE_ENV === 'development') {
		app.use(morgan('dev', {stream: logger.stream}));
	} else if(NODE_ENV === 'production') {
		app.use(morgan('tiny', {stream: logger.stream}));
	} 
};