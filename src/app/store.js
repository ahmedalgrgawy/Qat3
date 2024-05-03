import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from "../features/reviews/reviewSlice"
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';
import mainReducer from '../features/main/mainSlice';


export const store = configureStore({
    reducer: {
        main: mainReducer,
        reviews: reviewsReducer,
        cart: cartReducer,
        products: productReducer
    }
})
