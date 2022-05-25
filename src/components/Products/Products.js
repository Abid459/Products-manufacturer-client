import React from 'react';

const Products = ({ products }) => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                products?.map(product => {
                    const { _id, name, image, quantity, price, description } = product;
                    return <div>
                        <div class="card w-full bg-base-100 shadow-xl glass">
                            <figure ><img src={image} alt="tools" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{name}</h2>
                                <div class="mb-6 h-20 overflow-hidden z-10">
                                <p className='z-0'>{description?.length>=90?description.slice(0,90)+' ...':description}</p>
                                </div>
                                <div class="bg-base-200 rounded ">
                                    <div class="p-4">
                                        <p>Min order Quantiy: 100pc</p>
                                        <p>Available Quantiy: {quantity}</p>
                                        <p>Price (per unit): ${price}</p>
                                    </div>
                                </div>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Products;