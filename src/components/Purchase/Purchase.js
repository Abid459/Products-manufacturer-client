import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import useUserDetails from '../../utilities/userDetails';
import auth from '../firebase.init';

const Purchase = () => {
    const location = useLocation();
    // const { register, formState: { errors }, handleSubmit } = useForm();
    const product = location?.state;
    const { _id, name, model, description, email, image, minOrder, price, quantity } = product
    const { data } = useUserDetails(email);
    const user = data?.data;

    const [amounterror, setAmountError] = useState(' ');
    const [totalPrice, setTotalPrice] = useState(0)


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
        const response = await axios.post('http://localhost:5000/addOrder',{email,phoneNo,productId:_id,amount,totalPrice})
        if(response.data.acknowledged){
            toast.success('Your order have been placed')
        }
        console.log('order',response)
    }

    return (
        <div div className='min-h-screen ' >

            <div>
                <div class="card card-side bg-base-100 shadow-xl w-4/5 mx-auto mt-10">
                    <div className='p-10 w-2/6 bg-white'>
                        <figure><img class='h-80 object-contain' src={image} alt="Movie" /></figure>
                    </div>
                    <div class="card-body w-4/6">
                        <h2 class="card-title">{name}</h2>
                        <p className='mb-10'>{model}</p>
                        <p>Price per unit: <span className='text-secondary'> ${price}</span></p>
                        <p>Available quantity: <span className='text-secondary'> {quantity} pc</span></p>
                        <p> <span className='font-semibold'>Details: </span> {description}</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <div class="card w-4/5 bg-base-100 shadow-xl mx-auto mt-20">
                        <div class="card-body">
                            <h2 class="card-title">Check your information before placing the order</h2>
                            <div className='flex justify-around'>
                                <div>
                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">What is your name?</span>
                                        </label>
                                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" defaultValue={user?.name} />
                                        <label class="label">
                                        </label>
                                    </div>

                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Your Email</span>
                                        </label>
                                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly/>
                                        <label class="label">
                                        </label>
                                    </div>

                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Your Phone no</span>
                                        </label>
                                        <input type="text" name='phoneNo' placeholder="Type here" class="input input-bordered w-full max-w-xs" defaultValue={user?.phoneNo} />
                                        <label class="label">
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">The amount you want to purchase</span>
                                        </label>
                                        <label class="input-group">
                                            <span>Amount</span>
                                            <input type="number" name='amount'  placeholder="# piece" class="input input-bordered" onChange={handleAmount} />
                                        </label>
                                        <span class="label-text-alt mt-3 text-warning">{amounterror}</span>

                                    </div>
                                    <div className='text-right'>
                                        {/* <p>Price Per unit: ${price} </p>
                                        <p>Total price:{totalPrice}</p> */}
                                    </div>
                                </div>
                            </div>


                            <div class="card-actions justify-end">
                                <button class="btn btn-primary" disabled={amounterror}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default Purchase;