import React from 'react';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div className='bg-[#f6f5fa]'>
            <Header />
            <div className='container mx-auto'>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
