import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='w-full '>
            <div className='flex justify-center flex-col text-center'>
                <div className='flex justify-center conte'>
                    <h3 className='text-center font-bold text-xl'>Our Business Summery</h3>
                </div>
                <div class="stats shadow mx-auto my-10">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">We Served</div>
                        <div class="stat-value ">2K+</div>
                        <div class="stat-desc">Customers</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value ">2.6M+</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                        </div>
                        <div class="stat-value">100%</div>
                        <div class="stat-title">Happy Customers</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;