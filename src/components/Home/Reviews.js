import { faStar } from '@fortawesome/free-solid-svg-icons';
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
        <div className='min-h-full w-full my-10'>

        
            <h3 className='text-center font-bold text-xl '>Reviews</h3>
        <div className='mx-auto  flex justify-center my-5 gap-3'>

            {
                reviews && reviews.map(review => {
                    const rating = parseInt (review.review)
                    
                    return <div key={review._id} class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <Rating  start={0} stop={5} step={1} initialRating={rating}
                            emptySymbol={ <FontAwesomeIcon className='text-gray-300' icon ={faStar}></FontAwesomeIcon>}
                            fullSymbol={<FontAwesomeIcon className='text-yellow-500' icon ={faStar}></FontAwesomeIcon>}
                            ></Rating>
                            <p>Rating: {rating}</p>
                            <p>{review.detaisReview}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })

            }
            </div>
        </div>
    );
};

export default Reviews;