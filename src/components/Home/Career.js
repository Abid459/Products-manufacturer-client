import React from 'react';

const Career = () => {
    return (
        <section>
            <div className="wrapper ">
                <h3 className='text-center py-10 text-3xl font-semibold'><span className='text-amber-500'>Career</span> Opportunity</h3>
                <div className="hero mb-10 bg-slate-700 text-white ">
                    <div className="hero-content flex-col lg:flex-row justify-around p-10">
                        <div className=' '>
                        <img className='h-80 w-80 rounded object-cover' src={'/images/career.jpg'} />
                        </div>
                        <div className='p-24 '>
                            <h1 className="text-2xl font-semibold">Join as traniee</h1>
                            <p className="py-6 "> CRAFTSMAN offers challenging and rewarding careers in a variety of technical and non-technical roles</p>
                            <button className="btn bg-sky-700">JOIN OUR TEAM</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Career;