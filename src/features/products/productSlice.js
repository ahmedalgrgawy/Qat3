import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/data';

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem('filterData')),
        SingleProduct: JSON.parse(sessionStorage.getItem('singleProduct')) || products,
        filterOn: false,
        error: false
    },
    reducers: {
        filterProduct(state, action) {

            if (action.payload.toLowerCase() === "all categories") {

                state.filterOn = false;

            } else {

                try {

                    const filter = products.filter((product) => product.category.toLowerCase() === action.payload.toLowerCase())

                    state.filteredProducts = filter;

                    const saveState = JSON.stringify(filter);

                    sessionStorage.setItem('filterData', saveState)

                    state.filterOn = true;

                    state.error = false;

                } catch (err) {

                    return err;

                }

            }


        },
        singleProduct(state, action) {
            try {
                const oneProduct = products.filter((product) => product.id === action.payload)

                state.SingleProduct = oneProduct;

                const saveState = JSON.stringify(oneProduct);

                sessionStorage.setItem('singleProduct', saveState)

            } catch (error) {
                return error;
            }
        }
    }
})

export const { filterProduct, singleProduct } = productSlice.actions;

export default productSlice.reducer;