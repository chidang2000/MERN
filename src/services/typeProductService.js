import {
    getTypeProductFailed,
    getAllTypeProductSuccess,
    getTypeProductStart,
    getATypeProductSuccess,
} from '../redux/typeProductSlice';
import httpRequest from '../untils/httpRequest';

const typeProductService = {
    getAllTypeProduct: async (dispatch) => {
        dispatch(getTypeProductStart());
        try {
            const res = await httpRequest.get('type');
            dispatch(getAllTypeProductSuccess(res.data));
        } catch (err) {
            dispatch(getTypeProductFailed(err));
        }
    },

    getATypeProduct: async (dispatch, id) => {
        dispatch(getTypeProductStart());
        try {
            const res = await httpRequest.get(`type/${id}`);
            dispatch(getATypeProductSuccess(res.data));
            return res.data;
        } catch (err) {
            dispatch(getTypeProductFailed(err));
        }
    },
    createTypeProduct: async (newTypeProduct) => {
        try {
            await httpRequest.post('type/create', newTypeProduct);
        } catch (err) {
            console.log(err);
        }
    },

    updateTypeProduct: async (id, newTypeProduct) => {
        try {
            await httpRequest.put(`type/${id}/update`, newTypeProduct);
        } catch (err) {
            console.log(err);
        }
    },

    deleteTypeProduct: async (id) => {
        try {
            await httpRequest.delete(`type/${id}/delete`);
        } catch (err) {
            console.log(err);
        }
    },
};

export default typeProductService;
