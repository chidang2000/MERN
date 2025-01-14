import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import typeProductService from '../../../services/typeProductService';
import ModalComponent from '../../../components/modal/Modal';
import ModalDelete from '../modalDelete/ModalDelete';

const TypeProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const typesProduct = useSelector((state) => state.typeProduct.allTypeProduct?.data);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [idTypeProduct, setIdTypeProduct] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleDelete = (id) => {
        typeProductService.deleteTypeProduct(id);
        // closeModal();
        navigate(0);
    };

    useEffect(() => {
        typeProductService.getAllTypeProduct(dispatch);
    }, []);

    return (
        <div className='relative overflow-x-auto'>
            <h1 className='text-center font-bold mb-8'>DANH SÁCH LOẠI SẢN PHẨM</h1>
            <div className='mb-8 flex items-center justify-between'>
                <Link to='/admin/type/create' className='flex items-center gap-2'>
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
                            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                    </svg>

                    <p className='text-sm'>Thêm Loại Sản Phẩm</p>
                </Link>
            </div>
            <div className='flex justify-center'>
                <table className='w-fit text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                STT
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Tên Loại Sản Phẩm
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {typesProduct?.map((type, i) => (
                            <tr key={type._id} className='bg-white border-b'>
                                <td className='px-6 py-4 whitespace-nowrap'>{i + 1}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>{type.name}</td>
                                <td className='px-6 py-4'>
                                    <Link to={`/admin/type/${type._id}`} className='text-primary font-bold'>
                                        Sửa
                                    </Link>
                                </td>
                                <td className='px-6 py-4'>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal();
                                            setIdTypeProduct(type._id);
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
            </div>
            {/* MODAL DELETE*/}
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <ModalDelete
                    closeModal={closeModal}
                    onDelete={() => {
                        handleDelete(idTypeProduct);
                    }}
                />
            </ModalComponent>
            {/* END MODAL */}
        </div>
    );
};

export default TypeProduct;
