import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Rating from 'react-rating';
// var Rating = require('react-rating');

const Reviews = () => {
    const { isLoading, error, data, refetch } = useQuery('reviews', () => axios(`http://localhost:5000/reviews`))
    const reviews = data?.data;
    console.log('from review', reviews)
    return (
        <div className='min-h-full w-full'>


            <h3 className='text-center font-bold text-xl '>Reviews</h3>
            <div className='mx-auto  flex justify-center my-10 gap-3'>

                {
                    reviews && reviews.map(review => {
                        const rating = parseInt(review.review)

                        return <div key={review._id} class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title"></h2>
                                <div className='bg-base-300 w-12 h-12 rounded-full mx-auto my-5 flex justify-center items-center'>

                                <FontAwesomeIcon className='w-7 h-7 ' icon={faUser}></FontAwesomeIcon>
                                </div>
                                <Rating start={0} stop={5} step={1} initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon className='text-gray-300' icon={faStar}></FontAwesomeIcon>}
                                    fullSymbol={<FontAwesomeIcon className='text-yellow-500' icon={faStar}></FontAwesomeIcon>}
                                ></Rating>
                                <p>Rating: {rating}</p>
                                <p>{review.detaisReview}</p>
                            </div>
                        </div>
                    })

                }
            </div>
        </div>
    );
};

export default Reviews;