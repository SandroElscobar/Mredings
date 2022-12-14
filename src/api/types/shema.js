const {gql} = require("apollo-server-express")

module.exports = gql`
    type User {
        id: ID!
        email: String!
    }
    
    type Street {
        id: ID!
        name: String!
    }
    
    type City {
        id: ID!
        name: String!
        street: [Street]
    }
    
    type Query {
        users: [User!]!
        city: [City]
        getStreet(id: String!): City
        getCity(id: String!): City!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): String!
        signIn(email: String!, password: String!): String!
        createCity(name: String!): City!
        setStreet(id: String!, name: String!): City!
    }
`