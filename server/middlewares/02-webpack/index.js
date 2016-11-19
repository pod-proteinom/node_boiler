'use strict';
const conf = require('config');

const webpack = require('webpack');
const webpackConfig = require(conf.webpack.path);
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

exports.init = app => {
    if (process.env.NODE_ENV === 'development') {
        const compiler = webpack(webpackConfig);
        app.use(webpackMiddleware(compiler, {
            hot: true,
            publicPath: webpackConfig.output.publicPath,
            noInfo: true
        }));

        app.use(webpackHotMiddleware(compiler));
    }
};
