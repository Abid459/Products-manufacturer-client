import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";
import './myProfile.css'
import useUserData from '../../hooks/useUserData';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [user, loading, aError] = useAuthState(auth);
    const email = user?.email;
    const {userData,refetch} = useUserData(email);

    const imgStorageKey = '24753a95c31c04df900da1afeeb85b15';
    //update user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
        const imageDisplay = e.target.image.files[0];

        if (imageDisplay) {
            const formData = new FormData();
            formData.append('image', imageDisplay)
            const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
            const result = await axios.post(url, formData)
            console.log('This is umage result', result);

            console.log('it is succed')
            const name = e.target.name.value;
            const email = e.target.email.value;
            const phoneNo = e.target.phoneNo.value;
            const country = e.target.country.value;
            const state = e.target.state.value;
            const streetAddress = e.target.streetAddress.value;
            const linkedin = e.target.linkedin.value;
            const twitter = e.target.twitter.value;
            const image = result.data.data.url;

            const response = await axios.put(`https://limitless-earth-93689.herokuapp.com/updateUser/${userData?._id}`, { image, name, email, phoneNo, country, state, streetAddress, linkedin, twitter })
            if (response.data.acknowledged) {
                refetch();
                toast.success('Information updated')
            }
        }else{
            const name = e.target.name.value;
            const email = e.target.email.value;
            const phoneNo = e.target.phoneNo.value;
            const country = e.target.country.value;
            const state = e.target.state.value;
            const streetAddress = e.target.streetAddress.value;
            const linkedin = e.target.linkedin.value;
            const twitter = e.target.twitter.value;
            // const image = result.data.data.url;

            const response = await axios.put(`https://limitless-earth-93689.herokuapp.com/updateUser/${userData?._id}`, { name, email, phoneNo, country, state, streetAddress, linkedin, twitter })
            if (response.data.acknowledged) {
                refetch();
                toast.success('Information updated')
            }
        }



        // console.log(name,email);
        // console.log(image,name,email,phoneNo,country,state,streetAddress,linkedin,twitter);

        //  console.log('This is response',response)


    };
    loading && <Loading></Loading>
    
    aError && toast.error(aError.message)
    
    return (
        <div>
            <form onSubmit={handleSubmit}>


                <div className='flex flex-wrap lg:flex-nowrap p-10'>
                    <div className='w-80  mr-10'>
                        <div className='bg-gray-500 h-80 w-80 rounded-full object-cover flex justify-center items-center'>
                            <img className=' object-cover w-80 h-80 rounded-full' src={userData?.image} alt="" />
                            <div className={`select-image h-80 w-80 rounded-full absolute ${!isEdit ? 'hidden' : ''}`} >
                                <input type="file" className='overflow-hidden absolute bottom-10  left-28 text-transparent custom-file-input' name="image" id="" />
                            </div>

                        </div>
                        <input placeholder='What is your name?' type="text" name="name" className="input text-center my-10 text-xl font-semibold input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.name} />
                    </div>
                    <div className="info w-full ">
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-bold'>Your Information</h3>
                            {
                                !isEdit ? <span className="btn btn-sm" onClick={() => setIsEdit(!isEdit)}>Edit</span> : <button className="btn btn-sm" type='submit'>Update</button>
                            }

                        </div>
                        <div className="divider"></div>

                        <h4 className='text-xl font-semibold text-sky-500 mb-5'>Conact</h4>
                        <h4 className='font-semibold'>Your Email address:</h4>
                        <input type="text" name='email' placeholder="Add your Email" className="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.email} />

                        <h4 className='font-semibold'>Your Phone no:</h4>
                        <input type="text" name='phoneNo' placeholder='Add your Phone No' className="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.phoneNo} />


                        <h4 className='text-xl font-semibold text-sky-500  mb-5'>Address</h4>
                        <h4 className='font-semibold'>Country:</h4>
                        <input type="text" name='country' placeholder='Add your country' className="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.country} />
                        <h4 className='font-semibold'>District/State:</h4>
                        <input type="text" placeholder='Add your district/state' name='state' className="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.state} />
                        <h4 className='font-semibold'>Street Address</h4>
                        <input type="text" placeholder='Details about you address' name='streetAddress' className="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.streetAddress} />


                        <h4 className='text-xl font-semibold text-sky-500  mb-5'>Social</h4>
                        <div className="form-control">
                            <label className="input-group mb-5">
                                <span className='rounded-full'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></span>
                                <input type="text" name='linkedin' defaultValue={userData?.social?.linkedin} placeholder='Add your Linkedin profile' className="input input-bordered" disabled={!isEdit} />
                            </label>
                            <label className="input-group">
                                <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
                                <input type="text" name='twitter' placeholder='Add your Twitter account' defaultValue={userData?.social?.twitter} className="input input-bordered" disabled={!isEdit} />
                            </label>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;