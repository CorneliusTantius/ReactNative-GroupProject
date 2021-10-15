import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const sampleSlice = createSlice({
    name: 'sample',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
            console.log(action)
        },
    },
})
export const valueSample = state => state.sample.value;
export const { increment, decrement, incrementByAmount } = sampleSlice.actions

export default sampleSlice.reducer