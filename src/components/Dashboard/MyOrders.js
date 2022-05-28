import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmModal from '../../shared components/ConfirmModal';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const MyOrders = () => {
    const [isConfirmDelete, setIsConfirmDelete] = useState(false)
    const [orderId,setOrderId] = useState('');
    const [user, loading, error2] = useAuthState(auth);
    const [ProductId,setProductId] = useState('')
    const { isLoading, error, data, refetch } = useQuery('products', () => axios(`http://localhost:5000/myOrder/${user?.email}`))


    const orders = data?.data;
    if (error) {
        return toast.error(error.message)
    }

    //delete operation
    const handleDelete = async (id) => {

        const response = axios.delete(`http://localhost:5000/order/${id}`)
        .then(()=>{
            toast.success('One order delete')
           
        })
        .catch((err)=>{
                toast.error(err.message)
        })
        console.log('delete response',response)
        
    }
    isConfirmDelete && handleDelete(orderId);


    return (
      <div>
           <div className='min-h-full'>
            
            {
                orders && orders.map(order => {
                    return <div class="card w-full   px-5 pt-5">
                        <div class=" flex bg-base-100 rounded-xl flex-row justify-between p-5 items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-0">
                            
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
                            <div class="">
                                <label onClick={()=>setOrderId(order._id)} for="confirm-modal" class="btn btn-sm modal-button">DELETE</label>

                            </div>
                        </div>
                    </div>
                })
               
            }
            <ConfirmModal
                setIsConfirmDelete={setIsConfirmDelete}
            ></ConfirmModal>
        </div>
    </div>
    );
};

export default MyOrders;