import { createSlice } from '@reduxjs/toolkit'

const updateData = (cart, amount, price) => {

    sessionStorage.setItem('cart', JSON.stringify(cart))

    sessionStorage.setItem('amount', JSON.stringify(amount))

    sessionStorage.setItem('price', JSON.stringify(price))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(sessionStorage.getItem('cart')) || [],
        totalAmount: JSON.parse(sessionStorage.getItem('amount')) || 0,
        totalPrice: JSON.parse(sessionStorage.getItem('price')) || 0,
    },
    reducers: {
        addToCart: (state, action) => {

            const addedProduct = action.payload

            try {
                const exist = state.cart.find((product) => product.id === addedProduct.id)

                if (exist) {

                    exist.amount++;

                    exist.totalPrice += addedProduct.price;

                    state.totalAmount++;

                    state.totalPrice += addedProduct.totalPrice;

                    updateData(state.cart, state.totalAmount, state.totalPrice)

                } else {

                    state.cart.push({
                        id: addedProduct.id,
                        price: addedProduct.price,
                        amount: 1,
                        totalPrice: addedProduct.price,
                        name: addedProduct.name,
                        color: addedProduct.color,
                        img: addedProduct.img,
                        text: addedProduct.text
                    })

                    state.totalAmount++;

                    state.totalPrice += addedProduct.price;

                    updateData(state.cart, state.totalAmount, state.totalPrice)

                }

            } catch (error) {
                return error
            }

        },
        removeFromCart: (state, action) => {

            const addedProduct = action.payload

            try {

                const exist = state.cart.find((product) => product.id === addedProduct.id)

                if (exist.amount === 1) {

                    state.cart = state.cart.filter((product) => product.id !== addedProduct.id);

                    state.totalAmount--;

                    state.totalPrice -= addedProduct.price;

                    updateData(state.cart, state.totalAmount, state.totalPrice)

                } else {

                    exist.amount--;

                    exist.totalPrice -= addedProduct.price;

                    state.totalAmount--;

                    state.totalPrice -= addedProduct.price;

                    updateData(state.cart, state.totalAmount, state.totalPrice)

                }
            } catch (error) {
                return error;
            }

        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;