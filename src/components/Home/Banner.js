import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('/images/banner.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">We are an extension to your success</h1>
                        <p className="mb-5">Craftsman is your source for electric tools with unmatched quality and efficiency at a low cost</p>
                        <p className='font-semibold text-blue-200'>We take custom order from around the world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;