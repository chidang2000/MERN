import React from 'react';
import { Link } from 'react-router';

const ProductItem = ({ id, title, price, rating, className }) => {
    return (
        <Link
            to={`/${id}`}
            className={`w-[180px] h-[350px] flex flex-col gap-4 bg-white shadow-2xl rounded-xl ${className}`}
        >
            <div className='w-[180px] h-[150px]'>
                <img
                    src='https://salt.tikicdn.com/ts/tikimsp/8d/a8/94/78e89b4429d461fb43987f9607f91392.png'
                    alt='none'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-4 flex flex-col gap-2'>
                <h3 className='text-secondary'>{title}</h3>

                <p className='text-red-500 font-bold'>{price} VND</p>
                <p className='text-sm flex items-center gap-2'>
                    {rating ? rating : ''}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-6 text-yellow-500'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                            clipRule='evenodd'
                        />
                    </svg>
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
