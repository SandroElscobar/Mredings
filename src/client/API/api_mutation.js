import {gql} from "@apollo/client";

const LOG_IN = gql`
    mutation Mutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password)
    }
`

const SET_USER = gql`
    mutation Mutation($name: String!, $email: String!, $password: String!) {
        createUser(name: $name, email: $email, password: $password)
    }
`

const CREATE_CITY = gql`
    mutation Mutation($name: String!) {
        createCity(name: $name)
    }
`

const SET_STREET = gql`
    mutation Mutation($setStreetId: String!, $name: String!) {
        setStreet(id: $setStreetId, name: $name)
    }
`




export {LOG_IN, SET_USER, CREATE_CITY, SET_STREET}