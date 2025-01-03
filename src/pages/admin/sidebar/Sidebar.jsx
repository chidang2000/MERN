import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-full flex flex-col  gap-4 p-4 rounded-xl mt-24'>
            <a
                href='/'
                className='p-4 border border-secondary rounded-xl text-center hover:bg-secondary hover:opacity-60 hover:text-white'
            >
                Product
            </a>
            <a
                href='/'
                className='p-4 border border-secondary rounded-xl text-center hover:bg-secondary hover:opacity-60 hover:text-white'
            >
                Product
            </a>
            <a
                href='/'
                className='p-4 border border-secondary rounded-xl text-center hover:bg-secondary hover:opacity-60 hover:text-white'
            >
                Product
            </a>
        </div>
    );
};

export default Sidebar;
