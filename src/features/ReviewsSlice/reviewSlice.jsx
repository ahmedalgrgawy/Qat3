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
    },
    {
        id: '4',
        reviewText: 'It was very good sale 4'
    },
    {
        id: '5',
        reviewText: 'It was very good sale 5'
    },
    {
        id: '6',
        reviewText: 'It was very good sale 6'
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