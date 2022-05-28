import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Products from '../Products/Products';

const AllProducts = () => {
    const { isLoading, error, data} = useQuery('products',()=>axios('http://localhost:5000/products') )
    const products =data?.data;
    return (
        <div>
            {isLoading && <Loading></Loading>}
            <h3 className='text-center text-xl font-bold mb-10'>All Product</h3>
            <Products products={products}></Products>
        </div>
    );
};

export default AllProducts;