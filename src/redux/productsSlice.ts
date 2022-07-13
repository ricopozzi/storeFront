import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: true
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true
        },
        getProducts: (state, action) => {
            state.products = action.payload
            state.isLoading = false
        }
    }
})


export const { getProducts, getProductsFetch } = productsSlice.actions
export const selectItems =  (state:any) => state.products.products

export default productsSlice.reducer