import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../firebase.init';


const AddReview = () => {
    const [user, loading, error2] = useAuthState(auth);
    const handleSublit = async (e) =>{
        console.log('inside review')
        e.preventDefault();
        const review = e.target.rating.value;
        const detaisReview = e.target.detaisReview.value;
        console.log('review',e.target.rating.value)
        const response = await axios.post(`http://localhost:5000/addReview/`, {email:user?.email,review,detaisReview}) 
                if(response.data.acknowledged){
                    toast.success(' We have recieved your review')
                    // reset();
                }
    }
    return (
        <div className='min-h-screen'>
            <div className='flex justify-center content-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body flex-col">
                    <h2 class="card-title">Add your review</h2>
                    <form onSubmit={handleSublit}>
                        <div className='flex flex-col justify-center text-center'>

                        
                    <div class="rating my-5">
                        <input type="radio" name="rating" value={1} class="mask mask-star" />
                        <input type="radio" name="rating" value={2} class="mask mask-star"/>
                        <input type="radio" name="rating" value={3} class="mask mask-star" />
                        <input type="radio" name="rating" value={4} class="mask mask-star" />
                        <input type="radio" name="rating" value={5} class="mask mask-star" />
                    </div>
                    <textarea name='detaisReview'  class="textarea textarea-bordered mb-6" placeholder="Write details about your experiences with us"></textarea>
                    <div class="card-actions">
                        <button type='submit' class="btn btn-primary">Add review</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddReview;