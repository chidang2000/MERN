import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
// import Content from './content/Content';
// import Product from './product/Product';

const AdminLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-8 h-screen bg-[#f6f5fa] p-4'>
            <div className='w-full h-full bg-white flex flex-col gap-8 rounded-xl'>
                <Sidebar />
            </div>
            <div className='w-full h-full col-span-7 flex flex-col gap-8'>
                <Header />
                <div className='bg-white p-8 mx-4 rounded-xl'>{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
