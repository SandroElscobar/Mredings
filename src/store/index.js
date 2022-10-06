import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userName from "./login";
import isLoggedIn from "./isloggedin";



const store = configureStore({
    reducer: {
        user: userName,
        checkIn: isLoggedIn
    }
})

export default store