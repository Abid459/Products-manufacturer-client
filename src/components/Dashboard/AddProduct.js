import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../firebase.init';

const AddProduct = () => {
    const [image,setImage] = useState(null);
    const [submitImageFile,setsubmitImageFile] = useState();
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const [user, loading, aError] = useAuthState(auth);
    const imgStorageKey = '24753a95c31c04df900da1afeeb85b15';

    const onSubmit = async (data) => {
        const { name, model, quantity, description,price,minOrder } = data;
        // const image = data?.image[0];
        console.log("this is inside submit",submitImageFile,name, model, quantity, description )
        const formData = new FormData();
        formData.append('image', submitImageFile)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        const result = await axios.post(url, formData);
        
        if (result.data.success) {
            const image = result.data.data.url;
            const response = await axios.post(`https://limitless-earth-93689.herokuapp.com/addProduct/`, {email:user?.email,name, model, quantity, description,price,minOrder,image}) 
            if(response.data.acknowledged){
                toast.success(' One Item added')
                setImage(null);
                reset();
            }
            console.log(response)
        }
    };



    const handleImage = (event) =>{
        const img =event.target.files[0];
        setsubmitImageFile(img)
        // setImage(image)
        // console.log(image)
        // console.log('firing onChange')
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
          }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero">
                    <div className="hero-content  ">
                        <div className="card flex-shrink-0 w-full bg-base-100 p-5 flex-row flex-wrap">
                            <div className=''>
                                <div className='h-80 w-72 bg-base-300'>
                                <img className='h-80 w-72 object-contain'  src={image} alt=''/> 
                                </div>
                                <div className='p-5'>
                                    <br />
                                    <input onChange={handleImage}  type="file" name="" id="" />
                                </div>
                            </div>
                            <div className="card-body">
                                {/* form input  */}
                                <div className="form-control">
                                    <input type="text" placeholder="name" className="input input-bordered"
                                        {...register("name")}
                                    />
                                </div>



                                <div className="form-control">
                                    <input type="text" placeholder="model" className="input input-bordered" {...register("model")} />
                                </div>

                                <div className="form-control">
                                    <input type="number" placeholder="quantity" className="input input-bordered" {...register("quantity")} />
                                </div>

                                <div className="form-control">
                                    <input type="number" placeholder="price" className="input input-bordered" {...register("price")} />
                                </div>

                                <div className="form-control">
                                    <input type="number" placeholder="min Order quantity" className="input input-bordered" {...register("minOrder")} />
                                </div>

                                <textarea className="textarea textarea-bordered" placeholder="description" {...register("description")}></textarea>

                                <div className="form-control mt-6">
                                    <button className="btn bg-sky-700">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;