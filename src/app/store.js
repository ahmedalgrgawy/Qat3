import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from '../features/ReviewsSlice/reviewSlice.jsx';
export const store = configureStore({
    reducer: {
        reviews: reviewReducer,
    }
})
