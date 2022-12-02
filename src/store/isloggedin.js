import {createSlice} from '@reduxjs/toolkit'
import {authUser} from "../utils/authUser";

export const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: {
        value: !!localStorage.getItem('token')
    },
    reducers: {
        setIsLoggedIn(state, action) {
            state.value = action.payload
        }
    }
})

export const {setIsLoggedIn} = isLoggedIn.actions
export default isLoggedIn.reducer