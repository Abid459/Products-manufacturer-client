import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useUserDetails = (email) => {
    const { isLoading, error, data, refetch } = useQuery(['user',email], () => axios.get(`http://localhost:5000/user/${email}`));
    return {data,isLoading}
};

export default useUserDetails;