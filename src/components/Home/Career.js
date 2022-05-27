import React from 'react';

const Career = () => {
    return (
        <div>
            <div className="wrapper bg-base-200">
                <h4 className='text-center py-4 text-2xl font-semibold'>Career</h4>
                <div class="hero mb-10 bg-base-200 ">
                    <div class="hero-content flex-col lg:flex-row">
                        <div className=' '>
                        <img className='h-80 w-80 rounded object-cover' src={'/images/career.jpg'} />
                        </div>
                        <div className='p-24 '>
                            <h1 class="text-2xl font-bold">Join as traniee</h1>
                            <p class="py-6 text-xl"> CRAFTSMAN offers challenging and rewarding careers in a variety of technical and non-technical roles</p>
                            <button class="btn btn-primary">JOIN OUR TEAM</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Career;