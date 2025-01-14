import React, { useEffect, useState } from 'react';
import typeProductService from '../../../services/typeProductService';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const UpdateTypeProduct = () => {
    // const typeProduct = useSelector((state) => state.typeProduct.aTypeProduct?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [typeProduct, setTypeProduct] = useState({});
    const [nameType, setNameType] = useState();

    const handleUpdateTypeProduct = () => {
        const newType = { name: nameType };
        typeProductService.updateTypeProduct(id, newType);
        navigate('/admin/type');
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await typeProductService.getATypeProduct(dispatch, id);
            setTypeProduct(result);
        };
        fetchApi();
    }, [id]);

    return (
        <form className='max-w-sm mx-auto'>
            <div className='mb-5'>
                <h1 className='text-center font-bold mb-8'>THÊM LOẠI SẢN PHẨM</h1>
            </div>
            <div className='mb-5'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium '>
                    Tên Loại Sản Phẩm
                </label>
                <input
                    type='text'
                    id='name'
                    defaultValue={typeProduct?.name}
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setNameType(e.target.value)}
                />
            </div>

            <button
                onClick={handleUpdateTypeProduct}
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
            >
                THÊM
            </button>
        </form>
    );
};

export default UpdateTypeProduct;
