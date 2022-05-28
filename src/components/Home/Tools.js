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
    const { isLoading, error, data} = useQuery('products',()=>axios('http://localhost:5000/recentProducts') )
    const products =data?.data;
    // console.log(data?.data)
    return (
        <section className='p-16'>
            {isLoading && <Loading></Loading>}
            <h3 className='text-center text-xl font-bold mb-10'>Currently We are manufacturing</h3>
            <Products products={products}></Products>
            <p onClick={()=>navigate('/allProducts')} className='cursor-pointer text-right mt-2'>All Products  <FontAwesomeIcon icon={faCircleRight}></FontAwesomeIcon> </p>
        </section>
    );
};

export default Tools;