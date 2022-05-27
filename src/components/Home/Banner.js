import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: `url('/images/banner.jpg')` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-2xl font-bold">We are an extension to your success</h1>
                        <p class="mb-5">Craftsman is your source for electric tools with unmatched quality and efficiency at a low cost</p>
                        <p className='font-semibold text-blue-200'>We take custom order from around the world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;