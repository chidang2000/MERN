import React, { useEffect, useState } from 'react';
import productService from '../../../services/productService';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
const UpdateProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    // const product = useSelector((state) => state.product.aProduct?.data);
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const handleUpdateProduct = () => {
        const newProduct = {
            name,
            price,
            desc,
            type,
        };
        productService.updateProduct(dispatch, id, newProduct);
        navigate('/admin');
        navigate(0);
    };
    useEffect(() => {
        const fetchApi = async () => {
            const res = await productService.getAProduct(dispatch, id);
            setProduct(res);
        };
        fetchApi();
        // productService.getAProduct(dispatch, id);
    }, [id]);
    return (
        <form className='max-w-sm mx-auto'>
            <div className='mb-5'>
                <h1 className='text-center font-bold mb-8'>SỬA SẢN PHẨM</h1>
            </div>
            <div className='mb-5'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium '>
                    Tên Sản Phẩm
                </label>
                <input
                    defaultValue={product?.name}
                    // value={name}
                    type='text'
                    id='name'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='price' className='block mb-2 text-sm font-medium  '>
                    Gía
                </label>
                <input
                    defaultValue={product?.price}
                    type='text'
                    id='price'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    // value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='desc' className='block mb-2 text-sm font-medium  '>
                    Mô Tả
                </label>
                <textarea
                    defaultValue={product?.description}
                    // value={desc}
                    id='desc'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='type' className='block mb-2 text-sm font-medium'>
                    Loại Sản Phẩm
                </label>
                <input
                    defaultValue={product?.type}
                    type='text'
                    id='type'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    // value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </div>
            <button
                onClick={handleUpdateProduct}
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
            >
                Sửa
            </button>
        </form>
    );
};

export default UpdateProduct;
