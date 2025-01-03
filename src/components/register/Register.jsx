import React, { useState } from 'react';

const Register = ({ setIsLogin }) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <div className='flex justify-center items-center w-[500px] '>
            <form method='POST' className='w-full  px-10 py-20 '>
                <h1 className='font-bold text-center mb-5 text-xl'>ĐĂNG KÝ</h1>
                <div className='mb-5'>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                        Email
                    </label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900'>
                        Tên Đăng Nhập
                    </label>
                    <input
                        name='username'
                        type='text'
                        id='username'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                        Mật Khẩu
                    </label>
                    <input
                        autoComplete='on'
                        name='password'
                        type='password'
                        id='password'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={() => setIsLogin(true)}
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mt-5'
                >
                    Đăng Ký
                </button>
            </form>
        </div>
    );
};

export default Register;
