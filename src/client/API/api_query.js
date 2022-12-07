import {gql} from "@apollo/client";

const GET_CITY = gql`
    query Query {
        city {
            id
            name
        }
    }
`
const GET_STREET = gql`
    query GetStreet($getStreetId: String!) {
        getStreet(id: $getStreetId) {
            street {
                id
                name
            }
        }
    }
`

export {GET_CITY, GET_STREET}

