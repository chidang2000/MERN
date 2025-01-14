import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import productService from '../../../services/productService';
import { useSelector } from 'react-redux';
import Input from '../../../components/input/Input';

const CreateProduct = () => {
    const typesProduct = useSelector((state) => state.typeProduct?.allTypeProduct?.data);
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDesc] = useState();
    const [type, setType] = useState(typesProduct[0]?._id);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Lưu URL ảnh để hiển thị
            };
            reader.readAsDataURL(file);
        }
    };
    const handleCreateProduct = () => {
        const newProduct = {
            name,
            image: 'https://salt.tikicdn.com/ts/tikimsp/8d/a8/94/78e89b4429d461fb43987f9607f91392.png',
            price: Number(price),
            countInStock: 200,
            rating: 5,
            description,
            type,
        };
        productService.createProduct(newProduct);
        navigate('/admin');
    };

    return (
        <form className='max-w-sm mx-auto'>
            <div className='mb-5'>
                <h1 className='text-center font-bold mb-8'>THÊM SẢN PHẨM</h1>
            </div>
            <Input label='Tên Sản Phẩm' id='name' onChange={(e) => setName(e.target.value)} focus />
            <Input label='Giá Sản Phẩm' id='price' onChange={(e) => setPrice(e.target.value)} />
            <Input label='Mô Tả' id='desc' onChange={(e) => setDesc(e.target.value)} textarea />

            <div className='mb-5'>
                <label htmlFor='type' className='block mb-2 text-sm font-medium'>
                    Loại Sản Phẩm
                </label>
                <select
                    id='type'
                    onChange={(e) => setType(e.target.value)}
                    className='bg-gray-50 border border-gray-300 px-4  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                >
                    {typesProduct.map((type) => (
                        <option key={type._id} value={type._id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mb-5'>
                <div className='flex flex-col items-center p-4  rounded shadow-md'>
                    <input
                        type='file'
                        accept='image/*'
                        className='mb-4 file:px-4 file:py-2  file:bg-blue-500 file:text-white file:rounded file:cursor-pointer file:shadow hover:file:bg-blue-600'
                        onChange={handleImageUpload}
                    />
                    {imagePreview && (
                        <div className='mt-4'>
                            <img src={imagePreview} alt='Preview' className='max-w-full max-h-60 rounded shadow-md' />
                        </div>
                    )}
                    {!imagePreview && <p className='text-sm text-gray-500'>No image uploaded yet.</p>}
                </div>
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
