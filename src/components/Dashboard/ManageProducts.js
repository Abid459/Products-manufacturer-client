import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmModal from '../../shared components/ConfirmModal';
import Loading from '../Loading/Loading';

const ManageProducts = () => {
    const [isConfirmDelete, setIsConfirmDelete] = useState(false)
    const [ProductId,setProductId] = useState('')
    const { isLoading, error, data, refetch } = useQuery('products', () => axios('https://limitless-earth-93689.herokuapp.com/products'))
    const products = data?.data;
    if (error) {
        return toast.error(error.message)
    }


    //delete operation
    const handleDelete = async (id) => {

        axios.delete(`https://limitless-earth-93689.herokuapp.com/product/${id}`)
        refetch();
    }
    isConfirmDelete && handleDelete(ProductId);



    return (
        <div className='min-h-full'>
            {isLoading && <Loading></Loading>}
            {
                products && products.map(product => {
                    return <div className="card w-full  px-5 pt-5">
                        <div className=" flex bg-base-100 rounded-xl flex-row lg:justify-between p-5 items-center flex-wrap gap-4 lg:gap-0 justify-center">
                            <div>
                                <div className='h-12 w-12  bg-base-200 object-cover'>
                                    <img className='h-12 w-12  object-contain' src={product.image} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>{product?.name?.length >= 15 ? product.name.slice(0, 15) + ' ...' : product.name}</p>
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold'>Quantity</p>
                                <p>{product.quantity}</p>
                            </div>
                            {/* <div className='text-center'>
                                <p className='font-semibold'>Price/unit</p>
                                <p>{product.price}</p>
                            </div> */}
                            <div className="">
                                <label onClick={()=>setProductId(product._id)} for="confirm-modal" className="btn btn-sm modal-button">DELETE</label>

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