import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../components/firebase.init';
import Loading from '../components/Loading/Loading';

const useIsAdmin = () => {

    const [user, loading, aError] = useAuthState(auth);
    const email = user?.email;
    const { isLoading, error, data, refetch } = useQuery(['user', email], () => axios.get(`http://localhost:5000/user/${email}`));
    if(isLoading){
        return <Loading></Loading>
    }
    // if(data?.data.role === 'admin'){
    //     setIsAdmin(true);
    // }
    const isAdmin = data?.data.role === 'admin'?true:false;
    return isAdmin;
};

export default useIsAdmin;