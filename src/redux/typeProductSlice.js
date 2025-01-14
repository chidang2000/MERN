import { createSlice } from '@reduxjs/toolkit';

const typeProductSlice = createSlice({
    name: 'typeProduct',
    initialState: {
        allTypeProduct: {
            data: null,
        },
        aTypeProduct: {
            data: null,
        },
        isFetching: false,
        error: false,
    },

    reducers: {
        getTypeProductStart: (state) => {
            state.isFetching = true;
        },

        getAllTypeProductSuccess: (state, action) => {
            state.isFetching = false;
            state.allTypeProduct.data = action.payload;
        },

        getATypeProductSuccess: (state, action) => {
            state.isFetching = false;
            state.aTypeProduct.data = action.payload;
        },

        getTypeProductFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getTypeProductStart, getAllTypeProductSuccess, getATypeProductSuccess, getTypeProductFailed } =
    typeProductSlice.actions;
export default typeProductSlice.reducer;
