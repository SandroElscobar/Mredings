import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userName from "./login";
import isLoggedIn from "./isloggedin";
import street from "./street";



const store = configureStore({
    reducer: {
        user: userName,
        checkIn: isLoggedIn,
        street: street
    }
})

export default store