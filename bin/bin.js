const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const webpackDevServer = require('webpack-dev-server')

const compiler = webpack(webpackConfig)
const devServerOptions = {...webpackConfig[0].devServer, open: true}
const server = new webpackDevServer(devServerOptions, compiler)

const runServer = async () => {
    console.log("Starting server...")
    await server.start()
}

runServer()