import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Banner from './Banner';
import Category from './Category';
import Tools from './Tools';

const Home = () => {
    // const [products,setProducts]= useState([])
  
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            {/* <Category></Category> */}
        </div>
    );
};

export default Home;