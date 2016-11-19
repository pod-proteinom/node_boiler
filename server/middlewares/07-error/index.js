'use strict';

const logger = require('modules/logger');
const ParamsError = require('modules/errors').ParamsError;

exports.init = app => {
    app.use((err, req, res, next) => {
        if (err instanceof ParamsError) {
            return next();
        }

        logger.error(err.message);
        res.status(500);
        res.send('Internal server error');
    });

    app.use((req, res) => {
        res.status(404);
        res.send('Not Found');
    });
};
