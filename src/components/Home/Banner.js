import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen grid myHero " style={{ backgroundImage: `url(')` }}>
                {/* <div className="hero-overlay bg-slate-700 bg-opacity-70"></div> */}
                <div className=" bg-slate-700 hero-content text-neutral-content w-full">
                    <div className="w-full p-10 text-white">
                        <h1 className="mb-5 text-4xl font-bold">We are an <span className='text-sky-400'>      extension</span> <br /> to your success</h1>
                        <p className="mb-5">Craftsman is your source for electric tools with unmatched quality and efficiency at a low cost</p>
                        <button className='bg-sky-700 py-3 px-5 rounded'>GET STARTED</button>
                    </div>
                </div>
                <div className='bg-slate-700 flex justify-center'>
                    <img className='w-full' src="/images/hero banner.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;