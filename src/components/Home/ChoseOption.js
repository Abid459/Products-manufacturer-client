import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ChoseOption = () => {
    return (
        <div className=' my-10 py-7'>


            <div class=" bg-base-100 bg-base-200 mx-auto">
                <div class="card-body p-28">
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
                </div>
            </div>



        </div>
    );
};

export default ChoseOption;