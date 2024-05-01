import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/Finale Data/data'

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem('filterData')),
        SingleProduct: products,
        filterOn: false,
        error: false
    },
    reducers: {
        filterProduct(state, action) {
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
    }
})

export const { filterProduct } = productSlice.actions;

export default productSlice.reducer;