'use strict';

exports.init = app => {
	app.use(require('body-parser').json());
};