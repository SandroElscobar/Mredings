import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"
import {setContext} from "apollo-link-context"

const uri = "http://localhost:4000/api"
const httpLink = createHttpLink({uri})
const cache = new InMemoryCache()

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem("token")
        }
    }
})


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    uri,
    cache,
    resolvers: {},
    connectToDevTools: true
})


const div = document.getElementById('root')
const root = createRoot(div)

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>

)
