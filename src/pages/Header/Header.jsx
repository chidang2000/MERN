import React, { useState } from 'react';
import ModalComponent from '../../components/modal/Modal';
import Auth from '../auth/Auth';

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='bg-white sticky z-50 top-0'>
            <div className='container mx-auto flex items-center justify-between p-4 '>
                <div className='w-32'>
                    <img
                        src='https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png'
                        alt='none'
                        className='w-full object-cover'
                    />
                </div>
                <div className='max-w-md flex-1 text-secondary'>
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
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
                                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                                />
                            </svg>
                        </div>
                        <input
                            type='search'
                            id='default-search'
                            className='block w-full py-4 px-8 ps-10 text-sm border border-secondary rounded-lg outline-none '
                            placeholder='Search Mockups, Logos...'
                            required
                        />
                        <button
                            type='submit'
                            className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='flex items-center gap-2 text-secondary cursor-pointer'>
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
                                d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                            />
                        </svg>
                        <p>Trang Chủ</p>
                    </div>
                    <div className='flex items-center gap-2 text-secondary cursor-pointer' onClick={openModal}>
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
                                d='M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z'
                            />
                        </svg>
                        <p>Tài Khoản</p>
                    </div>
                    {/* MODAL */}

                    <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
                        <Auth />
                    </ModalComponent>

                    {/* CLOSE MODAL */}

                    <div className='text-primary cursor-pointer relative'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6 '
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                            />
                        </svg>
                        <div className='absolute bottom-4 left-4'>
                            <p className=' p-1 rounded-xl top-0 right-0 bg-red-500 text-white'>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
