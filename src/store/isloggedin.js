import {createSlice} from '@reduxjs/toolkit'

export const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: {
        value: false
    },
    reducers: {
        setIsLoggedIn(state, action) {
            state.value = action.payload
        }
    }
})

export const {setIsLoggedIn} = isLoggedIn.actions
export default isLoggedIn.reducer