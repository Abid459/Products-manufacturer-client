import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import useUserDetails from '../../utilities/userDetails';
import auth from '../firebase.init';

const Purchase = () => {
    const location = useLocation();
    const product = location.state;
    // const [user, loading, aError] = useAuthState(auth);
    const { _id, name, model, description, email, image, minOrder, price, quantity } = product
    // const userEmail = user?.email;
    const { data } = useUserDetails(email);
    // console.log('user data purchase', data?.data);
    const user = data?.data;
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
                                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" defaultValue={user?.email} />
                                    <label class="label">
                                    </label>
                                </div>

                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Your Phone no</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" defaultValue={user?.phoneNo} />
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
                                        <input type="number" placeholder="# piece" class="input input-bordered" />
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;