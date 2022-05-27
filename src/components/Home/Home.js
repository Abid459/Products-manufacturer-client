import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Category from './Category';
import Footer from './Footer';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    // const [products,setProducts]= useState([])
  
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Footer></Footer>
            {/* <Category></Category> */}
        </div>
    );
};

export default Home;