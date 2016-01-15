var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
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
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            templateContent: function() {
                var templateContentString = ''
                + '<!DOCTYPE html>'
                + '<html>'
                  + '<head>'
                    + '<meta charset="UTF-8">'
                    + '<title>Webpack App</title>'
                    
                    
                  + '</head>'
                  + '<body>'
                    
                    + '<div id="app"></div>'
                    
                  + '</body>'
                + '</html>';
                return templateContentString;
            }
        })
    ]
};

module.exports = config;
