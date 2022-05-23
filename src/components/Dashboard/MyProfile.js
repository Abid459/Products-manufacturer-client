import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './myProfile.css'

const MyProfile = () => {
    const [isEdit,setIsEdit] = useState(false)
    return (
        <div className='flex p-10'>
            <div className='w-80  mr-10'>
                <div  className='bg-gray-500 h-80 w-80 rounded-full'>
                <div className={`select-image h-80 w-80 rounded-full relative ${!isEdit?'hidden':''}`} >
                    <input type="file" className='overflow-hidden absolute bottom-10  left-28 text-transparent custom-file-input' name="" id="" />
                </div>

                </div>
                <input type="text" class="input text-center my-10 text-xl font-semibold input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={'Onuk Tomuk'} />
            </div>
            <div className="info w-full ">
                <div className='flex justify-between'>
                <h3 className='text-xl font-bold'>Your Information</h3>
                <button class="btn btn-sm" onClick={()=>setIsEdit(!isEdit)}>{!isEdit?'Edit':'Update'}</button>
                </div>
                <div class="divider"></div>

                <h4 className='text-xl font-semibold text-secondary mb-5'>Conact</h4>
                <h4 className='font-semibold'>Your Email address:</h4>
                <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit}  defaultValue={'something@gmail.com'} />
                <h4 className='font-semibold'>Your Phone no:</h4>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={'+01182718278917892'} />


                <h4 className='text-xl font-semibold text-secondary mb-5'>Address</h4>
                <h4 className='font-semibold'>Country:</h4>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={'Bangladesh'} />
                <h4 className='font-semibold'>District/State:</h4>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={'Dhaka'} />
                <h4 className='font-semibold'>Street Address</h4>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={'Mirpur 10'} />


                <h4 className='text-xl font-semibold text-secondary mb-5'>Social</h4>
                <div class="form-control">
                    <label class="input-group mb-5">
                        <span><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></span>
                        <input type="text"  class="input input-bordered" disabled={!isEdit} />
                    </label>
                    <label class="input-group">
                        <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
                        <input type="text"  class="input input-bordered" disabled={!isEdit} />
                    </label>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;