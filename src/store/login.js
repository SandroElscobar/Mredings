import {createSlice} from '@reduxjs/toolkit'
import {authUser} from "../utils/authUser";

export const userName = createSlice({
    name: 'user',
    initialState: {
        name: authUser(localStorage.getItem('token'))
    },
    reducers: {
        setUserName(state, action) {
            state.name = action.payload
        }
    }
})

export const {setUserName} = userName.actions
export default userName.reducer