require('dotenv').config()
const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    mode: NODE_ENV,
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server/'),
        filename: "bundle.server.js",
        clean: true
    },
    module: {
        rules: [
            {
                test:/\.[tj]s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
}