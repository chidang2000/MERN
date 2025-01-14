import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router';
import useDebounce from '../../components/hooks/useDebounce.js';
import searchService from '../../services/searchService.js';
const Search = () => {
    const [showResult, setShowResult] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);
    console.log(searchResult);

    const handleChangeSearchValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            const result = await searchService.searchByName(debouncedValue);
            setSearchResult(result);
        };

        fetchApi();
    }, [debouncedValue]);

    return (
        <Tippy
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className='bg-white rounded-xl shadow-xl p-8 w-[448px]' tabIndex='-1' {...attrs}>
                    <div className='flex flex-col gap-4 '>
                        {searchResult.length > 0 ? (
                            searchResult?.map((product) => (
                                <Link key={product._id} to='/' className='flex items-center gap-4'>
                                    <img
                                        src={product.image}
                                        alt='none'
                                        className='w-10 h-w-10 object-cover rounded-full'
                                    />

                                    <h3 className='text-base flex-1'>{product.name}</h3>
                                </Link>
                            ))
                        ) : (
                            <h3 className='text-center'>Không có sản phẩm !</h3>
                        )}
                    </div>
                </div>
            )}
            onClickOutside={handleHideResult}
            placement='top' // Vị trí tooltip
            interactive={true} // Cho phép tương tác trong tooltip
        >
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
                    placeholder='Tên Sản Phẩm'
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={handleChangeSearchValue}
                />
                <button
                    type='submit'
                    className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
                >
                    Search
                </button>
            </div>
        </Tippy>
    );
};

export default Search;
