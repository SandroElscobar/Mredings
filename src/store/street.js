import {createSlice} from '@reduxjs/toolkit'

const street = createSlice({
    name: 'street',
    initialState: {
        street: null
    },
    reducers: {
        setStreet(state, action) {
            state.street = action.payload
        }
    }
})

export const {setStreet} = street.actions
export default street.reducer