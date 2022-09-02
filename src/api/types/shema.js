const {gql} = require("apollo-server-express")

module.exports = gql`
    type User {
        id: ID!
        email: String!
    }
    
    type Query {
        user(id: ID): User
        users: [User!]!
        me: User!
        hello: String
    }
    type Mutation {
        createUser(email: String!, password: String!): String!
    }
`