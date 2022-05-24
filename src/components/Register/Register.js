import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import saveUser from "../../utilities/saveUser";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    const handleGoogleSignin = () => {
        console.log('login in is clicked')
        signInWithGoogle();

    }
    const onSubmit =async (data) => {
        const { displayName, email, password } = data;
        console.log(data)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        console.log("inside preocess", user)
    }

    //saving user into database
    user && saveUser(user.user.displayName,user.user.email)
    gUser && saveUser(gUser.user.displayName,gUser.user.email);
    
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-xl mb-5">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>



                        {/* name field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs"
                                {...register("displayName", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.displayName && <span className="label-text-alt text-warning">{errors.displayName?.message}</span>}
                            </label>
                        </div>


                        {/* email field */}



                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your email adddress</span>
                            </label>
                            <input type="text" placeholder="eamil" class="input input-bordered w-full max-w-xs"
                                 {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                })}
                            />
                            <label class="label">
                                {errors.email && <span className="label-text-alt text-warning">{errors.email?.message}</span>}
                            </label>
                        </div>


                        {/* password field  */}


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Chose a strong password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Please provide a password"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password should be min 6 charecter"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password && <span className="label-text-alt text-warning">{errors.password?.message}</span>}
                            </label>
                        </div>
                        <div class="card-actions justify-end">
                            <button type='submit' class="btn btn-primary">Register</button>
                        </div>
                        <div class="divider">OR</div>
                    </form>
                    <p className='text-sm  mb-5 text-center'>Already have an account? <span className='cursor-pointer text-yellow-600' onClick={()=>navigate('/login')}>Log in</span> </p>
                    {/* signin with google button  */}
                    <div class=" w-full max-w-xs mx-auto mb-10">
                        <button class="btn w-full max-w-xs " onClick={handleGoogleSignin}>Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;