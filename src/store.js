import { createSlice, configureStore } from '@reduxjs/toolkit'

const adderSlice = createSlice({
    name: 'adder',
    initialState: {
        value: 0
    },
    reducers: {
        added: (state, action) => {
            state.value += action.payload
        },
        reset: state => {
            state.value = 0
        }
    }
})

export const { added, reset } = adderSlice.actions

const store = configureStore({
    reducer: adderSlice.reducer
})

export default store
