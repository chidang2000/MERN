import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProduct: {
            data: null,
        },
        aProduct: {
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

        createProductSuccess: (state) => {
            state.isFetching = false;
        },

        updateAProductSuccess: (state) => {
            state.isFetching = false;
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
    createProductSuccess,
    updateAProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
