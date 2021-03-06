import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ConfirmModal from '../../shared components/ConfirmModal';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const ManageOrders = () => {
    const [orderId,setOrderId] = useState('');
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
    const { isLoading, error, data,refetch} = useQuery(['orderManage',isConfirmDelete],()=>axios('https://limitless-earth-93689.herokuapp.com/orders',{
        headers:{
            authorization :`Bearer ${localStorage.getItem('accessToken')}`
    }
    } ))
    useEffect(()=>{
        refetch()
    },[refetch])
    if(isLoading){
        return <Loading></Loading>
    }
    if(error){
        toast.error(error.message)
    }
    const handleDelete = async (id) => {

        const response = axios.delete(`https://limitless-earth-93689.herokuapp.com/order/${id}`)
        .then(()=>{
            toast.success('One order delete')
           
        })
        .catch((err)=>{
                toast.error(err.message)
        })
        console.log('delete response',response)
        
    }
    
    isConfirmDelete && handleDelete(orderId);
    const orders =data?.data;
    console.log(data)
    
    return (
        <div className='min-h-full'>
            
            {
                orders && orders.map(order => {
                    return <div className="card w-full   px-5 pt-5">
                        <div className=" flex flex-wrap bg-base-100 sm:gap-5 rounded-xl flex-row justify-between p-5 items-center">
                            
                            <div className='text-center '>
                                <p className='font-semibold'>Product Id</p>
                                <p>{order.productId}</p>
                            </div>
                            <div className='text-center '>
                                <p className='font-semibold'>Product Name</p>
                                <p>{order.productName}</p>
                            </div>
                            <div className='text-center '>
                                <p className='font-semibold'>From</p>
                                <p>{order.email}</p>
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold'>Amount</p>
                                <p>{order.amount}</p>
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold'>Total price</p>
                                <p>{order.totalPrice}</p>
                            </div>
                            <div className="">
                                <label onClick={()=>setOrderId(order._id)} for="confirm-modal" className="btn btn-sm modal-button bg-sky-700">DELETE</label>

                            </div>
                        </div>
                    </div>
                })
               
            }
            <ConfirmModal
                setIsConfirmDelete={setIsConfirmDelete}
            ></ConfirmModal>
        </div>
    );
};

export default ManageOrders;