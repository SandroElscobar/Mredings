const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
    mode: NODE_ENV,
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
    },
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "bundle.client.js",
        publicPath: "/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/client/index.html"}),
        new CleanWebpackPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        static: 'dist',
        hot: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    devtool: 'source-map',
}