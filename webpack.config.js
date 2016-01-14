var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        // path: path.resolve(__dirname, 'build'),
        path: '/usr/share/nginx/html/build',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;
