'use strict';

const conf = require('config');
const express = require('express');

exports.init = app => {
	if(process.env.NODE_ENV === 'development') {
		app.use('/', express.static(conf.server.dirs.public));	
	}
};