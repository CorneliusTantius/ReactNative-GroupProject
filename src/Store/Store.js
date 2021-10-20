import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './Reducers/SampleReducer'
import profileReducer from './Reducers/ProfileReducer'

export const store = configureStore({
    reducer: {
        sample: sampleReducer,
        profile: profileReducer
    },
})