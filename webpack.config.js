var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'resources/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        // path: '/usr/share/nginx/html/build',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /node_modules/,
            loader: 'babel', // The module to load. "babel" is short for "babel-loader"
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/, // Only .css files
            loaders: ['style', 'css'] // Run both loaders
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
require('es6-promise').polyfill();
