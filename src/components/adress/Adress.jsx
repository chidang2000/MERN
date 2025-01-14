import React, { useEffect, useState } from 'react';
import { adressRequest } from '../../untils/httpRequest';
import Input from '../input/Input';

const Adress = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const handleChangeCity = async (e) => {
        setSelectedCity(e.target.value);
        const dist = await adressRequest.get(`/p/${e.target.value}?depth=2`);
        setDistricts(dist.data);
    };

    const handleChangeDistrict = async (e) => {
        setSelectedDistrict(e.target.value);
        const ward = await adressRequest.get(`/d/${e.target.value}?depth=2`);
        setWards(ward.data);
    };
    useEffect(() => {
        const fetchApi = async () => {
            const city = await adressRequest.get('/p');
            setCities(city.data);
        };

        fetchApi();
    }, []);

    return (
        <div className='w-[450px] mx-auto p-6 bg-white '>
            <Input label='Địa điểm cụ thể' id='name' />

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='city'>
                    Tỉnh/Thành phố
                </label>
                <select
                    id='city'
                    value={selectedCity}
                    onChange={handleChangeCity}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500'
                >
                    <option value=''>Chọn Tỉnh/Thành phố</option>
                    {cities?.map((city, index) => (
                        <option key={index} value={city.code}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='district'>
                    Quận/Huyện
                </label>
                <select
                    id='district'
                    value={selectedDistrict}
                    onChange={handleChangeDistrict}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500'
                >
                    <option value=''>Chọn Quận/Huyện</option>
                    {districts?.districts?.map((district, index) => (
                        <option key={index} value={district.code}>
                            {district.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor='ward'>
                    Phường/Xã
                </label>
                <select
                    id='ward'
                    value={selectedWard}
                    onChange={(e) => setSelectedWard(e.target.value)}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500'
                >
                    <option value=''>Chọn Phường/Xã</option>
                    {wards?.wards?.map((ward, index) => (
                        <option key={index} value={ward.code}>
                            {ward.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='flex justify-between items-center'>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-1'>
                    Hoàn thành
                </button>
            </div>
        </div>
    );
};

export default Adress;
