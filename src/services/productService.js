import httpRequest from '../untils/httpRequest.js';
import {
    createProductSuccess,
    getAProductFailed,
    getAProductStart,
    getAProductSuccess,
    productFailed,
    productStart,
    productSuccess,
    updateAProductSuccess,
} from '../redux/productSlice.js';

const productService = {
    getAllProduct: async (dispatch) => {
        dispatch(productStart());
        try {
            const res = await httpRequest.get('product');
            dispatch(productSuccess(res.data));
        } catch (err) {
            dispatch(productFailed(err));
        }
    },

    getAProduct: async (dispatch, id) => {
        dispatch(getAProductStart());
        try {
            const res = await httpRequest.get(`product/${id}`);
            dispatch(getAProductSuccess(res.data));
            return res.data;
        } catch (err) {
            dispatch(getAProductFailed(err));
        }
    },

    createProduct: async (dispatch, newProduct) => {
        dispatch(productStart());
        try {
            await httpRequest.post('product/create', newProduct);
            dispatch(createProductSuccess());
        } catch (err) {
            dispatch(productFailed(err));
        }
    },

    updateProduct: async (dispatch, id, newproduct) => {
        dispatch(productStart());
        try {
            await httpRequest.put(`product/${id}/update`, newproduct);
            dispatch(updateAProductSuccess());
        } catch (err) {
            dispatch(productFailed(err));
        }
    },
};

export default productService;
