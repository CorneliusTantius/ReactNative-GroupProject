import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './Reducers/SampleReducer'

export const store = configureStore({
    reducer: {
        sample: sampleReducer,
    },
})