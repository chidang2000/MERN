import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../services/productService';
import typeProductService from '../../services/typeProductService';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.allProduct.data?.products);
    useEffect(() => {
        productService.getAllProduct(dispatch);
        // typeProductService.getAllTypeProduct(dispatch);
    }, []);
    return (
        <div className='mt-8 bg-white p-8'>
            <h2 className='font-bold mb-4'>Thuong Hieu Noi Bat</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4'>
                {products?.map((product) => (
                    <ProductItem
                        key={product._id}
                        id={product._id}
                        title={product.name}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
