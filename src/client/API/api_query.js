import {gql} from "@apollo/client";

const GET_CITY = gql`
    query Query {
        city {
            id
            name
            street {
                id
                name
            }
        }
    }
`

export default GET_CITY