import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/firebase.init';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '../components/Loading/Loading';

const useUserData = (email) => {
    const [userData, setUserData] = useState({})
    //fetch user data
    const { isLoading, error, data, refetch } = useQuery(['user', email], () => axios.get(`https://limitless-earth-93689.herokuapp.com/user/${email}`))
    // console.log(data)
    useEffect(() => {
        setUserData(data?.data)
    }, [data]);
    if (isLoading) {
        return <Loading></Loading>
    }
    error && toast.error(error.message)
   
    return {userData,refetch}
};

export default useUserData;