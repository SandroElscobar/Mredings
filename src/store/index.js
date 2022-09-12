import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userName from "./login";



const store = configureStore({
    reducer: {
        user: userName
    }
})

export default store