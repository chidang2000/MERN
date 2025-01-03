import React from 'react';

const Header = () => {
    return (
        <div className='bg-white p-4 mx-4 rounded-xl '>
            <a href='/' className=' flex items-center justify-end gap-4'>
                <h3>Chi Dang</h3>
                <div className='w-10 h-10 '>
                    <img
                        src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/356654562_3552124045053490_259712774871438384_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=100&ccb=1-7&_nc_sid=fe756c&_nc_ohc=r8sTFDpXk_QQ7kNvgGTZ-Jg&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AaTX4Qep7DlanATvPg3laWK&oh=00_AYAM_myTvvoIEUariAXrxMDSblWc94uoEiO5_ZI1Z4kEdg&oe=67791811'
                        alt='none'
                        className='w-full h-full object-cover rounded-full'
                    />
                </div>
            </a>
        </div>
    );
};

export default Header;
