import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    },
};
const Banner = () => {
    return (
        <div className='mt-8 bg-white p-8 rounded-xl'>
            <Carousel responsive={responsive} draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                <div className='flex items-center justify-center gap-8'>
                    <div className='w-[550px] h-[310px]'>
                        <img
                            src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/ba/9b/24/28b95e4895f98834fd873102cd1e19fc.png.webp'
                            alt='none'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                    <div className='w-[550px] h-[310px]'>
                        <img
                            src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/ba/9b/24/28b95e4895f98834fd873102cd1e19fc.png.webp'
                            alt='none'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <div className='w-[550px] h-[310px]'>
                        <img
                            src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/ba/9b/24/28b95e4895f98834fd873102cd1e19fc.png.webp'
                            alt='none'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                    <div className='w-[550px] h-[310px]'>
                        <img
                            src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/ba/9b/24/28b95e4895f98834fd873102cd1e19fc.png.webp'
                            alt='none'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
