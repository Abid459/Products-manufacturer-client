import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ChoseOption = () => {
    return (
        <div className=' my-10 p-7'>


            <div class="card bg-base-100 shadow-xl mx-auto w-4/5">
                <div class="card-body">
                    <h4 className='text-xl font-semibold mb-4'>NOT ONLY OUR PRODUCTS OUR AFTER SELL SERVICE STANDS OUT TOO</h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCircleRight}></FontAwesomeIcon> 1 Year parts garuntee
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleRight}></FontAwesomeIcon> 3 Year service warenty
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleRight}></FontAwesomeIcon> Instant technical support
                        </li>
                    </ul>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ChoseOption;