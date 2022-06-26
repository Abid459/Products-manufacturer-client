import { faChartLine, faCoins, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='w-full '>
            <div className='flex justify-center flex-col text-center mt-20'>
                <div className='flex justify-center conte'>
                    <h3 className='text-center font-bold text-3xl'>Our <span className='text-amber-500'> Journry </span></h3>
                </div>
                <div className="flex justify-around text-white shadow w-full p-10 mx-auto bg-slate-700 my-5">

                    <div className="flex ">
                        <div>
                            <div className="stat-title">We Served</div>
                            <div className="stat-value ">2K+</div>
                            <div className="stat-desc">Customers</div>
                        </div>
                        <div className="stat-figure text-sky-400">
                            <FontAwesomeIcon className='w-6 h-6 ml-4' icon={faChartLine}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <div className="stat-title">Annual revenue</div>
                            <div className="stat-value ">2.6M+</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                        <div className="stat-figure text-sky-400">
                            <FontAwesomeIcon className='w-6 h-6 ml-4' icon={faCoins}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <div className="stat-value">100%</div>
                            <div className="stat-title">Happy Customers</div>
                        </div>
                        <div className="stat-figure text-sky-400">
                            <FontAwesomeIcon className='w-6 h-6 ml-4' icon={faHeart}></FontAwesomeIcon>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;