const {gql} = require("apollo-server-express")

module.exports = gql`
    type User {
        id: ID!
        email: String!
    }
    
    type Query {
        users: [User!]!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): String!
        signIn(email: String!, password: String!): String!
    }
`