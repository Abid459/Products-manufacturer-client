import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Reviews.css'


import axios from 'axios';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import Rating from 'react-rating';
import useUserData from '../../hooks/useUserData';
// var Rating = require('react-rating');

const Reviews = () => {
    const reviewEmail = useRef();
    const { isLoading, error, data, refetch } = useQuery('reviews', () => axios(`https://limitless-earth-93689.herokuapp.com/reviews`))
    const reviews = data?.data;
    const { userData } = useUserData(reviewEmail.current);
    // console.log('from review', reviews)

    const items = reviews?.map(review => {
        console.log("Review", review)
        const rating = parseInt(review.review)
        reviewEmail.current = review.email;
        return <div key={review._id} className="card w-96 h-96 my-5 bg-base-100 shadow-xl mx-auto" >
            <div className="card-body">
                <div className='bg-base-300 w-28 h-28 rounded-full mx-auto my-5 flex justify-center items-center'>
                    {
                        userData?.image ? <img className='w-28 h-28 rounded-full object-cover' src={userData?.image} alt="" /> : <FontAwesomeIcon className='w-7 h-7 ' icon={faUser}></FontAwesomeIcon>
                    }
                    {/* {userData?.image ||} */}
                </div>
                <div className='text-center'>
                    <p className='text-xl font-semibold uppercase'>{userData?.name}</p>
                    <Rating className='mb-5' start={0} stop={5} step={1} initialRating={rating} readonly
                        emptySymbol={<FontAwesomeIcon className='text-gray-300' icon={faStar}></FontAwesomeIcon>}
                        fullSymbol={<FontAwesomeIcon className='text-yellow-500' icon={faStar}></FontAwesomeIcon>}
                    ></Rating>
                    {/* <p>Rating: {rating}</p> */}
                    <p>{review.detaisReview}</p>
                    {/* <p className='text-xs opacity-80'>By-{review.email}</p> */}
                </div>
            </div>
        </div>
    })


    return (
        <div className=' w-full my-10 '>
            <h3 className='text-center font-bold text-xl '>WHAT <span className='text-amber-400'> OTHERS </span> SAY</h3>
            <div>

                <div className='mx-auto flex justify-center flex-wrap  gap-3'>
                    <AliceCarousel className='bg-black mx-autoflex justify-center' mouseTracking disableButtonsControl items={items} autoPlay autoPlayInterval={5000} infinite 
                    responsive={{
                        0: {
                          items: 1
                        },
                        1024: {
                          items: 3
                        }
                      }}
                    />
                </div>
            
            </div>
        </div>
    );
};

export default Reviews;