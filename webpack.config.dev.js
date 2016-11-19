'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
}
