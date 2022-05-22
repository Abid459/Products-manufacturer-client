import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Products from '../Products/Products';

const Tools = () => {
    const { isLoading, error, data} = useQuery('products',()=>axios('products.json') )
    const products =data?.data;
    console.log(data?.data)
    return (
        <section className='p-16'>
            {isLoading && <Loading></Loading>}
            <h3 className='text-center text-xl font-bold mb-10'>Currently We are manufacturing</h3>
            <Products products={products}></Products>
            
        </section>
    );
};

export default Tools;