import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ products }) => {
    const navigate = useNavigate()
    // const handleNavigate = (product) =>{
    //     navigate('/purchase', {state:product})
    // }
    return (
        <div className='grid lg:grid-cols-3 lg:gap-10'>
            {
                products?.map((product, index) => {
                    const { _id, name, image, quantity, price, description, minOrder, model } = product;
                    return <div key={index}>
                        <div className="card w-full bg-base-100  border ">
                            <div className='w-full h-64 bg-white'>
                                <figure ><img className=' lg:w-full h-60 object-contain p-5' src={image} alt="tools" /></figure>
                            </div>
                            <div className="card-body bg-base-300">
                                <h2 className="card-title">{name}</h2>
                                <div className="mb-6 h-20 overflow-hidden z-10">
                                    <p className='z-0'>{description?.length >= 90 ? description.slice(0, 90) + ' ...' : description}</p>
                                </div>
                                <div className="bg-base-200 lg:w-80  rounded-xl ">
                                    <div className="p-4">
                                        <p className='mb-'>Min order Quantiy: {minOrder}</p>
                                        <p className='mb-'>Available Quantiy: {quantity}</p>
                                        <p className='mb-'>Price (per unit):   ${price}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end mt-5">
                                    <button className="btn btn-outline" onClick={() => navigate(`/purchase/${_id}`)}>Buy Now</button>
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