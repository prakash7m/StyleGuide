var path = require('path');
var webpack = require('webpack');
     
module.exports = {
    entry: path.resolve(__dirname, 'src/client/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src/client/public'),
        filename: 'app.bundle.js',
        publicPath: 'src/client/public/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            }, {
                test: /\.gif$/,
                loader: "url-loader?mimetype=image/png"
            }, {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devtool: "#inline-source-map",
    stats: {
        colors: true
    }
};