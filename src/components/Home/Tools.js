import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Products from '../Products/Products';

const Tools = () => {
    const navigate = useNavigate()
    const { isLoading, error, data} = useQuery('products',()=>axios('https://limitless-earth-93689.herokuapp.com/recentProducts') )
    const products =data?.data;
    // console.log(data?.data)
    return (
        <section className='p-16'>
            {isLoading && <Loading></Loading>}
            <h3 className='text-center text-3xl font-bold mb-10'>Our <span className='text-amber-500'>Products</span></h3>
            <Products products={products}></Products>
            <p onClick={()=>navigate('/allProducts')} className='cursor-pointer text-right mt-2'>All Products  <FontAwesomeIcon icon={faCircleRight}></FontAwesomeIcon> </p>
        </section>
    );
};

export default Tools;