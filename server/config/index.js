'use strict';

const NODE_ENV = process.env.NODE_ENV;

let config;
if(NODE_ENV === 'development') {
	config = require('./development');
}

module.exports = config;