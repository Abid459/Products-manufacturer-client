import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L4OeyLwU2ukA0mWmkjpX5dNtsOTEaZHmPVYZRFjIojbyc5cboPmK2FYNp6eDy4KXVqcujgVqQbsZfuxXDbJPLZk004tQGNrmt');


const Payment = () => {
    const { id } = useParams()
    const { isLoading, error, data, refetch } = useQuery('products', () => axios(`https://limitless-earth-93689.herokuapp.com/payment/${id}`))
    // const {id} = useParams()
    const order = data?.data;
    if (error) {
        return toast.error(error.message)
    }

    return (
        <div>
            <div >


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl mt-8 mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">Your Emial: {order?.email}</h2>
                            <p>Item name:{order?.productName}</p>
                            <p>Total unit: {order?.amount}</p>
                            <p> Amount to be paid:${order?.totalPrice}</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
                        <div className="card-body">
                            <Elements  stripe={stripePromise}>
                                <CheckoutForm order={order}/>
                            </Elements>
                        </div>
                    </div>
                </div>
                <div></div>


            </div>
        </div>
    );
};

export default Payment;