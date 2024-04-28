import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        reviewText: 'It was very good sale'
    },
    {
        id: '2',
        reviewText: 'It was very good sale 2'
    },
    {
        id: '3',
        reviewText: 'It was very good sale 3'
    }
]

export const reviewSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        helloFunc() {
            console.log("Hello There");
        }
    }
})

export const { helloFunc } = reviewSlice.actions;

export default reviewSlice.reducer;