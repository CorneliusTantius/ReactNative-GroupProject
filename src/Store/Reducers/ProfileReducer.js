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
        }
    },
})
export const profile_userName = state => state.userName.value;
export const profile_highScore = state => state.highScore.value;
export const { resetBoth, resetScore, resetUserName } = profileSlice.actions

export default profileSlice.reducer