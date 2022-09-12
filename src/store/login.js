import {createSlice} from '@reduxjs/toolkit'

export const userName = createSlice({
    name: 'user',
    initialState: {
        name: "Собака сутулая"
    },
    reducers: {
        setUserName(state, action) {
            state.name = action.payload
        }
    }
})

export const {setUserName} = userName.actions
export default userName.reducer