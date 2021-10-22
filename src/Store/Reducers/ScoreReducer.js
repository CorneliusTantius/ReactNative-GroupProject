import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentScore: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        resetScore: (state) => {
            state.currentScore = 0
        },
        setScore : (state, action) => {
            state.currentScore = action.payload
        },
        addScoreWhenCorrect : (state) => {
            state.currentScore = state.currentScore + 10
        }
    },
})
export const currentScore = state => state.score.currentScore;
export const {resetScore,setScore,addScoreWhenCorrect} = scoreSlice.actions

export default scoreSlice.reducer