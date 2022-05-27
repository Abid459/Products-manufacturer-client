import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Users = () => {
    const { isLoading, error, data, refetch } = useQuery('products', () => axios('http://localhost:5000/users'))
    const users = data?.data;

    if (error) {
        return toast.error(error.message)
    }
    const addAdmin = async (email) => {
        const response = await axios.put('http://localhost:5000/userAdmin', { email });
        refetch();
        
    }
    const removeAdmin = async (email) => {
        const response = await axios.put('http://localhost:5000/removeAdmin', { email });
        refetch();
        
    }
    const handleaddAdmin = async (email)=>{
        const add = addAdmin(email);
        toast.promise(add,{
            loading:'Loading',
            success:'Admin added',
            error:'Error when removing'
        })
    }
        // toast.promise()
 
    const handleremoveAdmin = async (email) => {
        const remove = removeAdmin(email)
        toast.promise(remove,{
            loading:'Loading',
            success:'removed From Admin',
            error:'Error when removing'
        })
        
    }

    return (
        <div className='min-h-full'>
        {isLoading && <Loading></Loading>}
        {
            users && users.map(user => {
                return <div class="card w-full   px-5 pt-5">
                    <div class=" flex bg-base-100 rounded-xl flex-row justify-between p-5 items-center">
                        <div>
                            <div className='h-12 w-12 rounded-full bg-base-200 object-cover'>
                                <img className='h-12 w-12 rounded-full object-cover' src={user.image} alt="" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold'>Name</p>
                            <p>{user?.name?.length >= 15 ? user.name.slice(0, 15) + ' ...' : user.name}</p>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold'>Email</p>
                            <p>{user.email}</p>
                        </div>
                        {/* <div className='text-center'>
                            <p className='font-semibold'>Price/unit</p>
                            <p>{user.price}</p>
                        </div> */}
                        <div class="">
                        {user?.role ? <button class="btn btn-outline " onClick={() => handleremoveAdmin(user.email)}>Remove Admin</button>:<button class="btn " onClick={() => handleaddAdmin(user.email)}>Make Admin</button>}

                        </div>
                    </div>
                </div>
            })
        }
    </div>
    );
};

export default Users;