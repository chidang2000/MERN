import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import productService from '../../../services/productService';

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDesc] = useState();
    const [type, setType] = useState();
    console.log(name);

    const handleCreateProduct = () => {
        const newProduct = {
            name,
            image: 'https://salt.tikicdn.com/ts/tikimsp/8d/a8/94/78e89b4429d461fb43987f9607f91392.png',
            price,
            countInStock: 200,
            rating: 5,
            description,
            type,
        };
        productService.createProduct(dispatch, newProduct);
        navigate('/admin');
    };

    return (
        <form className='max-w-sm mx-auto'>
            <div className='mb-5'>
                <h1 className='text-center font-bold mb-8'>THÊM SẢN PHẨM</h1>
            </div>
            <div className='mb-5'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium '>
                    Tên Sản Phẩm
                </label>
                <input
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
                    type='text'
                    id='price'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='desc' className='block mb-2 text-sm font-medium  '>
                    Mô Tả
                </label>
                <textarea
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
                    type='text'
                    id='type'
                    className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setType(e.target.value)}
                />
            </div>
            <button
                onClick={handleCreateProduct}
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
            >
                THÊM
            </button>
        </form>
    );
};

export default CreateProduct;
