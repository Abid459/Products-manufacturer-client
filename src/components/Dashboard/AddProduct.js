import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const imgStorageKey = '24753a95c31c04df900da1afeeb85b15';

    const onSubmit = async (data) => {
        const { name, model, quantity, description } = data;
        const image = data?.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        const result = await axios.post(url, formData)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="hero">
                    <div class="hero-content  ">
                        <div class="card flex-shrink-0 w-full bg-base-100 p-5 flex-row">
                            <div className=''>
                                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                                <div className='p-5'>
                                    <label htmlFor="image"> Select a image</label>
                                    <br />
                                    <input type="file" name="" id="" {...register("image")}/>
                                </div>
                            </div>
                            <div class="card-body">
                                {/* form input  */}
                                <div class="form-control">
                                    <input type="text" placeholder="name" class="input input-bordered"
                                        {...register("name")}
                                    />
                                </div>



                                <div class="form-control">
                                    <input type="text" placeholder="model" class="input input-bordered" {...register("model")} />
                                </div>
                                <div class="form-control">
                                    <input type="number" placeholder="quantity" class="input input-bordered" {...register("quantity")} />
                                </div>

                                <textarea class="textarea textarea-bordered" placeholder="description" {...register("description")}></textarea>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">ADD</button>
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