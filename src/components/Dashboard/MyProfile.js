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

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [user, loading, aError] = useAuthState(auth);
    const [userData,setUserData] = useState({})
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const email = user?.email;

//fetch user data
    const { isLoading, error, data, refetch } = useQuery(['user',email], () => axios.get(`http://localhost:5000/user/${email}`))
    // console.log(data)
    useEffect(()=>{
        setUserData(data?.data)
    },[data])

    const imgStorageKey = '24753a95c31c04df900da1afeeb85b15';
    //update user data
    const handleSubmit =async (e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
        const image =e.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        const result = await axios.post(url, formData)
        console.log(result);
        if (result.data.success) { 
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
            console.log(name,email);
            console.log(image,name,email,phoneNo,country,state,streetAddress,linkedin,twitter);
            await axios.put(`http://localhost:5000/updateUser/${userData._id}`, {image, name,email,phoneNo,country,state,streetAddress,linkedin,twitter})
        }
        refetch();

    };

    if(isLoading|| loading){
        return <Loading></Loading>
    }
    
    error && toast.error(error.message)
    aError && toast.error(aError.message)
    return (
        <div>
            <form onSubmit={handleSubmit}>

            
            <div className='flex p-10'>
                <div className='w-80  mr-10'>
                    <div className='bg-gray-500 h-80 w-80 rounded-full object-cover flex justify-center items-center'>
                        <img className=' object-cover w-80 h-80 rounded-full' src={userData?.image} alt="" />
                        <div className={`select-image h-80 w-80 rounded-full absolute ${!isEdit ? 'hidden' : ''}`} >
                            <input type="file" className='overflow-hidden absolute bottom-10  left-28 text-transparent custom-file-input' name="image" id=""/>
                        </div>

                    </div>
                    <input placeholder='What is your name?' type="text" name="name" class="input text-center my-10 text-xl font-semibold input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.name} />
                </div>
                <div className="info w-full ">
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-bold'>Your Information</h3>
                        {
                            !isEdit ? <span class="btn btn-sm" onClick={() => setIsEdit(!isEdit)}>Edit</span> : <button class="btn btn-sm"   type='submit'>Update</button>
                        }
                        
                    </div>
                    <div class="divider"></div>

                    <h4 className='text-xl font-semibold text-secondary mb-5'>Conact</h4>
                    <h4 className='font-semibold'>Your Email address:</h4>
                    <input type="text" name='email' placeholder="Add your Email" class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.email}/>

                    <h4 className='font-semibold'>Your Phone no:</h4>
                    <input type="text" name='phoneNo' placeholder='Add your Phone No' class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.phoneNo} />


                    <h4 className='text-xl font-semibold text-secondary mb-5'>Address</h4>
                    <h4 className='font-semibold'>Country:</h4>
                    <input type="text" name='country' placeholder='Add your country' class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.country} />
                    <h4 className='font-semibold'>District/State:</h4>
                    <input type="text" placeholder='Add your district/state' name='state' class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.state} />
                    <h4 className='font-semibold'>Street Address</h4>
                    <input type="text" placeholder='Details about you address' name='streetAddress' class="input input-bordered input-sm w-full max-w-xs bg-transparent mb-5" disabled={!isEdit} defaultValue={userData?.address?.streetAddress}/>


                    <h4 className='text-xl font-semibold text-secondary mb-5'>Social</h4>
                    <div class="form-control">
                        <label class="input-group mb-5">
                            <span className='rounded-full'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></span>
                            <input type="text" name='linkedin' defaultValue={userData?.social?.linkedin} placeholder='Add your Linkedin profile' class="input input-bordered" disabled={!isEdit} />
                        </label>
                        <label class="input-group">
                            <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
                            <input type="text" name='twitter' placeholder='Add your Twitter account' defaultValue={userData?.social?.twitter} class="input input-bordered" disabled={!isEdit} />
                        </label>
                    </div>

                </div>
            </div>
            </form>
        </div>
    );
};

export default MyProfile;