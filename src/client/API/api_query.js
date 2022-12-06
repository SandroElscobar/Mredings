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
    query Query($getStreetId: String!, $name: String!) {
        getStreet(id: $getStreetId, name: $name) {
            street {
                id
                name
            }
        }
    }
`

export {GET_CITY, GET_STREET}

