// import { CardElement } from '@stripe/react-stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';




const CheckoutForm = ({ order }) => {
    const [clientSecret, setClientSecret] = useState('');
    const price = order?.totalPrice;
    const [errormsg, setErrormsg] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('https://limitless-earth-93689.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    console.log('from payment',data?.clientSecret)
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])





    const handleSubmit = async (event) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        setErrormsg(error ? error.message : '')

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                  email: order?.email,
                },
              },
            },
          );
          if(confirmError){
            setErrormsg(confirmError.message)
          }else{
              toast.success('Your payment is complete')
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className='btn btn-sm my-4' disabled={!stripe || !elements || !clientSecret}>
                Pay
            </button>
            {errormsg && <p className='text-warning'>{errormsg}</p>}
        </form>
    );
}

export default CheckoutForm;