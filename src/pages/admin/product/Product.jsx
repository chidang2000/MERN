import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../../services/productService';
import { Link } from 'react-router';

const Product = () => {
    const products = useSelector((state) => state.product.allProduct?.data);
    const dispatch = useDispatch();
    useEffect(() => {
        productService.getAllProduct(dispatch);
    }, []);
    return (
        <div className='relative overflow-x-auto'>
            <h1 className='text-center font-bold mb-8'>DANH SÁCH SẢN PHẨM</h1>
            <div className='mb-8 flex items-center justify-end'>
                <Link to='/admin/product/create' className='flex items-center gap-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                    </svg>

                    <p className='text-sm'>Thêm Sản Phẩm</p>
                </Link>
            </div>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            STT
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Tên Sản Phẩm
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Giá
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Mô Tả
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Loại Sản Phẩm
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Đánh Giá
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Hình Ảnh
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Ngày Đăng
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product, i) => (
                        <tr key={product._id} className='bg-white border-b'>
                            <td className='px-6 py-4 whitespace-nowrap'>{i + 1}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.price} VND</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.description} </td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.type}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.rating} Sao</td>
                            <td className='px-6 py-4'>{product.image}</td>
                            <td className='px-6 py-4'>{new Date(product.createdAt).toLocaleDateString('vie-VN')}</td>
                            <td className='px-6 py-4'>
                                <Link to={`/admin/product/${product._id}`} className='text-primary font-bold'>
                                    Sửa
                                </Link>
                            </td>
                            <td className='px-6 py-4'>
                                <Link href='/admin' className='text-primary font-bold'>
                                    Xóa
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
