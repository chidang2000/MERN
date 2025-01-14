import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../../services/productService';
import ModalComponent from '../../../components/modal/Modal';
import ModalDelete from '../modalDelete/ModalDelete';

const ListProductDeleted = () => {
    const products = useSelector((state) => state.product.productDeleted?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [idProduct, setIdProduct] = useState('');
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleRestoreProduct = (id) => {
        productService.restoreProduct(id);
        navigate(0);
    };

    const handleForceDeleteProduct = (id) => {
        productService.forceDeleteProduct(id);
        navigate(0);
    };
    useEffect(() => {
        productService.getProductDeleted(dispatch);
    }, []);
    return (
        <div className='relative overflow-x-auto'>
            <h1 className='text-center font-bold mb-8'>SẢN PHẨM ĐÃ XÓA</h1>
            <div className='mb-8 flex items-center justify-between'>
                <Link to='/admin' className='flex items-center gap-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-4'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
                        />
                    </svg>

                    <p className='text-sm'>Quay Lại</p>
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
                                <button
                                    onClick={() => handleRestoreProduct(product._id)}
                                    className='text-primary font-bold'
                                >
                                    Khôi Phục
                                </button>
                            </td>
                            <td className='px-6 py-4'>
                                <button
                                    onClick={() => {
                                        openModal();
                                        setIdProduct(product._id);
                                    }}
                                    className='text-primary font-bold'
                                    type='submit'
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* MODAL DELETE*/}
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <ModalDelete
                    closeModal={closeModal}
                    onDelete={() => {
                        handleForceDeleteProduct(idProduct);
                    }}
                />
            </ModalComponent>
            {/* END MODAL */}
        </div>
    );
};

export default ListProductDeleted;
