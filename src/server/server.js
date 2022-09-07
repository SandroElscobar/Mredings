const express = require('express')
const {ApolloServer} = require('apollo-server-express')
require('dotenv').config()
const typeDefs = require('../api/types/shema')
const resolvers = require('../api/resolvers')
const cors = require('cors')
const db = require('../db/db')
const DB_HOST = process.env.DB_HOST
const port = process.env.PORT_SERVER

const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()

    apolloServer.applyMiddleware({app, path: '/api'})

    app.use(cors())
    app.use((req, res) => {
        res.send("Start Apollo server")
    })
    db.connect(DB_HOST)
    app.listen(port, () => console.log(`Server started on ${port} port`))
}

startServer()
