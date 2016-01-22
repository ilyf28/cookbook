var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function(options) {
    var entry = path.resolve(__dirname, 'config/mainApp');
    var output = {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    };
    var resolve = {
        extensions: ['', '.js', '.jsx']
    };
    var jsxLoader = {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        }
    };
    var cssLoader = {
        test: /\.css$/,
        loaders: ['style', 'css']
    };
    var imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=25000'
    };

    return {
        entry: entry,
        output: output,
        resolve: resolve,
        module: {
            loaders: [
                jsxLoader,
                cssLoader,
                imageLoader
            ]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ]
    };
};