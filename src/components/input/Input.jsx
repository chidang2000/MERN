import React, { useEffect, useRef } from 'react';

const Input = ({ label, id, type, placeholder, onChange, focus, textarea }) => {
    const inputRef = useRef();
    let Comp = 'input';
    if (textarea) {
        Comp = 'textarea';
    }
    useEffect(() => {
        if (focus) inputRef.current.focus();
    }, []);
    return (
        <div className='mb-5'>
            <label htmlFor={id} className='block mb-2 text-sm font-medium '>
                {label}
            </label>
            <Comp
                ref={inputRef}
                {...(type === 'password' ? { autoComplete: 'on' } : {})}
                type={type ? type : 'text'}
                id={id}
                placeholder={placeholder ? placeholder : label}
                className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
