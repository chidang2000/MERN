import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProduct: {
            data: null,
            countProductDeleted: null,
        },
        aProduct: {
            data: null,
        },
        productDeleted: {
            data: null,
        },
        isFetching: false,
        error: false,
    },
    reducers: {
        productStart: (state) => {
            state.isFetching = true;
        },
        productSuccess: (state, action) => {
            state.isFetching = false;
            state.allProduct.data = action.payload;
            state.allProduct.countProductDeleted = action.payload;
        },

        productFailed: (state) => {
            state.error = true;
            state.isFetching = false;
        },

        getAProductStart: (state) => {
            state.isFetching = true;
        },
        getAProductSuccess: (state, action) => {
            state.isFetching = false;
            state.aProduct.data = action.payload;
        },

        getAProductFailed: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        getProductDeletedSuccess: (state, action) => {
            state.isFetching = false;
            state.productDeleted.data = action.payload;
        },
    },
});

export const {
    productStart,
    productSuccess,
    productFailed,
    getAProductStart,
    getAProductSuccess,
    getAProductFailed,

    getProductDeletedSuccess,
} = productSlice.actions;
export default productSlice.reducer;
