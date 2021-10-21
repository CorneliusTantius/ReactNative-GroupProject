import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: "Eric",
    highScore:0,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetBoth: (state) => {
            state.userName = ""
            state.highScore = 0
        },
        resetScore: (state) => {
            state.highScore = 0
        },
        resetUserName: (state) => {
            state.userName = "Eric"
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setHighScore : (state, action) => {
            state.highScore = action.payload
        }
    },
})
export const profileUserName = state => state.profile.userName;
export const profileHighScore = state => state.profile.highScore;
export const { resetBoth, resetScore, resetUserName } = profileSlice.actions

export default profileSlice.reducer