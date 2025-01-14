import httpRequest from '../untils/httpRequest.js';
import {
    getAProductFailed,
    getAProductStart,
    getAProductSuccess,
    getProductDeletedSuccess,
    productFailed,
    productStart,
    productSuccess,
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

    getProductDeleted: async (dispatch) => {
        dispatch(productStart());
        try {
            const res = await httpRequest.get('product/deleted');
            dispatch(getProductDeletedSuccess(res.data));
            return res.data;
        } catch (err) {
            dispatch(productFailed(err));
        }
    },

    createProduct: async (newProduct) => {
        try {
            await httpRequest.post('product/create', newProduct);
        } catch (err) {
            console.log(err);
        }
    },

    updateProduct: async (id, newproduct) => {
        try {
            await httpRequest.put(`product/${id}/update`, newproduct);
        } catch (err) {
            console.log(err);
        }
    },

    deleteProduct: async (id) => {
        try {
            await httpRequest.delete(`product/${id}/delete`);
        } catch (err) {
            console.log(err);
        }
    },

    forceDeleteProduct: async (id) => {
        try {
            await httpRequest.delete(`product/${id}/forcedelete`);
        } catch (err) {
            console.log(err);
        }
    },

    restoreProduct: async (id) => {
        try {
            await httpRequest.patch(`product/${id}/restore`);
        } catch (err) {
            console.log(err);
        }
    },
};

export default productService;
