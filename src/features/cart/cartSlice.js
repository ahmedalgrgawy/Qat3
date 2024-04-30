import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: []
    },
    reducers: {
        addToCart: () => {
            return 'add'
        },
        removeFromCart: () => {
            return 'remove'
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;