import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from "@apollo/client"


const div = document.getElementById('root')
const root = createRoot(div)

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>

)
