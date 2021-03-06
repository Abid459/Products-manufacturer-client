import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import useUserDetails from '../../utilities/userDetails';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const location = useLocation();
    const {id} = useParams();
    const [user, loading, error2] = useAuthState(auth);
    

    const [amounterror, setAmountError] = useState(' ');
    const [totalPrice, setTotalPrice] = useState(0)

    const { isLoading, error, data} = useQuery(['product',id],()=>axios(`https://limitless-earth-93689.herokuapp.com/product/${id}`) )
    const product =data?.data;
    // const { uData } = useUserDetails(product?.email);
    // const user = uData?.data;
    if(isLoading){
        return <Loading></Loading>
    }
    console.log('purchase producst',product)
    const { _id, name, model, description, image, minOrder, price, quantity } = product;
    

    const handleAmount = (e) => {
        const amount = e.target.value;
        console.log(amount)
        amount < parseInt(minOrder) ? setAmountError(`Min order quantity is ${parseInt(minOrder)}`) : amount > parseInt(quantity) ? setAmountError(`You can't buy more than ${parseInt(quantity)}`) : setAmountError('');
        if (amount>minOrder) {
            setTotalPrice(amount * price)
        }else{
            setTotalPrice(0)
        }
        
    }
    



    const handleSubmit = async(e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const phoneNo = e.target.phoneNo.value;
        const totalPrice = amount* parseInt (price);
        if(amount === ''){
            setAmountError('Ammount can not be empty')
            console.log('null')
            return;
        }
        const response = await axios.post('https://limitless-earth-93689.herokuapp.com/addOrder',{email:user?.email,phoneNo,productId:_id,amount,totalPrice,productName:name})
        if(response.data.acknowledged){
            toast.success('Your order have been placed')
        }
        console.log('order',response)
    }

    return (
        
        <div div className='min-h-screen ' >

            <div>
                <div className="card card-side bg-base-100 shadow-xl w-4/5 mx-auto mt-10">
                    <div className='p-10 w-2/6 bg-white'>
                        <figure><img class='h-80 object-contain' src={image} alt="Movie" /></figure>
                    </div>
                    <div className="card-body w-4/6">
                        <h2 className="card-title">{name}</h2>
                        <p className='mb-10'>{model}</p>
                        <p>Price per unit: <span className='text-secondary'> ${price}</span></p>
                        <p>Available quantity: <span className='text-secondary'> {quantity} pc</span></p>
                        <p> <span className='font-semibold'>Details: </span> {description}</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className="card w-4/5 bg-base-100 shadow-xl mx-auto mt-20">
                        <div className="card-body">
                            <h2 className="card-title">Check your information before placing the order</h2>
                            <div className='flex justify-around'>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">What is your name?</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.name} />
                                        <label className="label">
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly/>
                                        <label className="label">
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Your Phone no</span>
                                        </label>
                                        <input type="text" name='phoneNo' placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.phoneNo} />
                                        <label className="label">
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">The amount you want to purchase</span>
                                        </label>
                                        <label className="input-group">
                                            <span>Amount</span>
                                            <input type="number" name='amount'  placeholder="# piece" className="input input-bordered" onChange={handleAmount} />
                                        </label>
                                        <span className="label-text-alt mt-3 text-warning">{amounterror}</span>

                                    </div>
                                    <div className='text-right'>
                                        {/* <p>Price Per unit: ${price} </p>
                                        <p>Total price:{totalPrice}</p> */}
                                    </div>
                                </div>
                            </div>


                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" disabled={amounterror}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default Purchase;