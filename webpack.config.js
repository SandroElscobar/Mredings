const webpackClient = require('./cfg/webpack.client.config')
const webpackServer = require('./cfg/webpack.server.config')
require('dotenv').config()

module.exports = [
    webpackClient,
    webpackServer
]