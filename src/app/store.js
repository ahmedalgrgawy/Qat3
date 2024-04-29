import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from "../features/reviews/reviewSlice"
import cartReducer from '../features/cart/cartSlice';


export const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        cart: cartReducer,
    }
})
