import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from "../features/reviews/reviewSlice"


export const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
    }
})
