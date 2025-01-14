import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className='w-full flex flex-col  gap-4 p-4 rounded-xl mt-24'>
            <Link
                to='/admin'
                className='p-4 border border-secondary rounded-xl text-center hover:bg-secondary hover:opacity-60 hover:text-white'
            >
                Product
            </Link>
            <Link
                to='/admin/type'
                className='p-4 border border-secondary rounded-xl text-center hover:bg-secondary hover:opacity-60 hover:text-white'
            >
                Type Product
            </Link>
        </div>
    );
};

export default Sidebar;
