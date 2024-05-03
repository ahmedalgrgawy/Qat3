import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(sessionStorage.getItem('cart')) || [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
        shippingPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {

            const productId = action.payload

            try {
                const exist = state.cart.find((product) => product.id === productId)

                if (exist) {
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.totalPrice;
                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        amount: 1,
                        totalPrice: productId.price,
                        name: productId.name,
                        color: productId.color,
                        img: productId.img,
                        text: productId.text
                    })
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }

                if (state.totalPrice > 100) {
                    state.shippingPrice = 30
                } else if (state.totalPrice > 2000) {
                    state.shippingPrice = 50
                } else if (state.totalPrice > 3000) {
                    state.shippingPrice = 50
                } else {
                    state.shippingPrice = 100
                }


            } catch (error) {
                return error
            }

        },
        removeFromCart: (state, action) => {
            const productId = action.payload

            try {
                const exist = state.cart.find((product) => product.id === productId.id && product.size === productId.size && product.color === productId.color)
                if (exist.amount === 1) {
                    state.cart = state.cart.filter((product) => product.id !== productId.id);
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                } else {
                    exist.amount--;
                    exist.totalPrice -= productId.price;
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }
            } catch (error) {
                return error;
            }

        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;