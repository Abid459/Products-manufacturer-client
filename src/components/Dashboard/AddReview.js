import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../firebase.init';


const AddReview = () => {
    const [user, loading, error2] = useAuthState(auth);
    const handleSublit = async (e) => {
        console.log('inside review')
        e.preventDefault();
        const review = e.target.rating.value;
        const detaisReview = e.target.detaisReview.value;
        console.log('review', e.target.rating.value)
        const response = await axios.post(`https://limitless-earth-93689.herokuapp.com/addReview/`, { email: user?.email, review, detaisReview })
        if (response.data.acknowledged) {
            toast.success(' We have recieved your review')
            // reset();
        }
    }
    return (
        <div className='min-h-screen'>
            <div className='flex justify-center content-center flex-wrap '>
                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <div className="card-body flex-col">
                        <h2 className="card-title">Add your review</h2>
                        <form onSubmit={handleSublit}>
                            <div className='flex flex-col justify-center text-center'>


                                <div className="rating my-5">
                                    <input type="radio" name="rating" value={1} className="mask mask-star" />
                                    <input type="radio" name="rating" value={2} className="mask mask-star" />
                                    <input type="radio" name="rating" value={3} className="mask mask-star" />
                                    <input type="radio" name="rating" value={4} className="mask mask-star" />
                                    <input type="radio" name="rating" value={5} className="mask mask-star" />
                                </div>
                                <textarea name='detaisReview' className="textarea textarea-bordered mb-6" placeholder="Write details about your experiences with us"></textarea>
                                <div className="card-actions">
                                    <button type='submit' className="btn btn-primary">Add review</button>
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