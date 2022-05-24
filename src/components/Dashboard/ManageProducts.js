import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmModal from '../../shared components/ConfirmModal';
import Loading from '../Loading/Loading';

const ManageProducts = () => {
    const [isConfirmDelete, setIsConfirmDelete] = useState(false)
    const [ProductId,setProductId] = useState('')
    const { isLoading, error, data, refetch } = useQuery('products', () => axios('http://localhost:5000/products'))
    const products = data?.data;
    if (error) {
        return toast.error(error.message)
    }


    //delete operation
    const handleDelete = async (id) => {

        axios.delete(`http://localhost:5000/product/${id}`)
        refetch();
    }
    isConfirmDelete && handleDelete(ProductId);



    return (
        <div className='min-h-full'>
            {isLoading && <Loading></Loading>}
            {
                products && products.map(product => {
                    return <div class="card w-full   px-5 pt-5">
                        <div class=" flex bg-base-100 rounded-xl flex-row justify-between p-5 items-center">
                            <div>
                                <div className='h-12 w-12 rounded-full bg-base-200 object-cover'>
                                    <img src={product.image} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>{product.name.length >= 15 ? product.name.slice(0, 15) + ' ...' : product.name}</p>
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold'>Quantity</p>
                                <p>{product.quantity}</p>
                            </div>
                            {/* <div className='text-center'>
                                <p className='font-semibold'>Price/unit</p>
                                <p>{product.price}</p>
                            </div> */}
                            <div class="">
                                <label onClick={()=>setProductId(product._id)} for="confirm-modal" class="btn btn-sm modal-button">DELETE</label>

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

export default ManageProducts;