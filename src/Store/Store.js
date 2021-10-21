import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './Reducers/SampleReducer'
import profileReducer from './Reducers/ProfileReducer'
import ScoreReducer from './Reducers/ScoreReducer'

export const store = configureStore({
    reducer: {
        sample: sampleReducer,
        profile: profileReducer,
        score: ScoreReducer
    },
})