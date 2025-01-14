import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ModalComponent from '../../components/modal/Modal';
import Adress from '../../components/adress/Adress';

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='container mx-auto p-8 grid grid-cols-4 gap-4 mt-8 '>
            <div className='w-full h-fit flex flex-col gap-4 rounded-xl bg-white p-4'>
                <div>
                    <img
                        src='https://salt.tikicdn.com/ts/tikimsp/8d/a8/94/78e89b4429d461fb43987f9607f91392.png'
                        alt='none'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold'>Dac Diem Noi Bat</h3>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='size-8 text-blue-700 text-sm'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                    clipRule='evenodd'
                                />
                            </svg>

                            <p className='text-sm text-third'>
                                Dựa trên hiểu biết sâu sắc về Đông Tây y và kiến thức lâm sàng.
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='size-8 text-blue-700 text-sm'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                    clipRule='evenodd'
                                />
                            </svg>

                            <p className='text-sm text-third'>
                                Dựa trên hiểu biết sâu sắc về Đông Tây y và kiến thức lâm sàng.
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='size-8 text-blue-700 text-sm'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                    clipRule='evenodd'
                                />
                            </svg>

                            <p className='text-sm text-third'>
                                Dựa trên hiểu biết sâu sắc về Đông Tây y và kiến thức lâm sàng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full col-span-2'>
                <div className='flex flex-col gap-4 rounded-xl bg-white p-4 mb-8'>
                    <h1 className='text-lg font-bold'>Dinh Dưỡng Học Bị Thất Truyền - Dinh Dưỡng Đẩy Lùi Bệnh Tật</h1>
                    <div className='flex items-center gap-1 text-lg'>
                        <p className='font-bold '>3.0</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='size-6 text-yellow-300'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='size-6 text-yellow-300'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='size-6 text-yellow-300'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <p className='text-third '>(352) | Da Ban 4k</p>
                    </div>
                    <p className='text-red-500 text-xl font-bold'>112.000 VND</p>
                </div>

                <div className='flex flex-col gap-4 rounded-xl bg-white p-4 mb-8'>
                    <h3 className='font-bold text-sm'>Thong Tin Van Chuyen</h3>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-sm'>Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</h3>

                        <button className='text-blue-500' onClick={openModal}>
                            Doi
                        </button>
                    </div>
                    <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
                        <Adress />
                    </ModalComponent>
                </div>

                <div className='flex flex-col gap-4 rounded-xl bg-white p-4 mb-8'>
                    <h3 className='font-bold'>San Pham Tuong Tu</h3>

                    <div className='grid grid-cols-3 gap-4'>
                        <ProductItem id='1' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                        <ProductItem id='2' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                        <ProductItem id='3' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                        <ProductItem id='4' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                        <ProductItem id='5' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                        <ProductItem id='6' title='Liệu Pháp Chữa Bệnh - Khu Phản Xạ' price='82.350' />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit'>
                <div className='flex flex-col gap-4 rounded-xl bg-white p-4 mb-8'>
                    <h3 className='font-bold'>So Luong</h3>
                    <div className='flex items-center gap-4'>
                        <button
                            className={`border border-secondary px-2 ${
                                quantity === 1 ? 'pointer-events-none opacity-55' : ''
                            }`}
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            -
                        </button>
                        <input
                            type='text'
                            value={quantity}
                            onChange={(e) => e.target.value}
                            className='w-[40px] border border-secondary px-2 text-center'
                        />
                        <button className='border border-secondary px-2' onClick={() => setQuantity(quantity + 1)}>
                            +
                        </button>
                    </div>

                    <div className='space-y-1'>
                        <h3 className='font-bold'>Tam Tinh</h3>
                        <p className='font-bold text-lg'>112.000 VND</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <button className='text-center text-white bg-red-500 rounded-xl py-2'>Mua Ngay</button>
                        <button className='text-center text-primary border border-primary rounded-xl py-2'>
                            Them Vao Gio Hang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
