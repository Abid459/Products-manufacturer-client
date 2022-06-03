import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import saveUser from "../../utilities/saveUser";
import generateToken from "../../utilities/generateToken";

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
    if(user){
        saveUser(user.user.displayName,user.user.email)
    }
    if(gUser){
        
        saveUser(gUser.user.displayName,gUser.user.email);
        generateToken(gUser.user.email);
    }
    
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl mb-5">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>



                        {/* name field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
                                {...register("displayName", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.displayName && <span className="label-text-alt text-warning">{errors.displayName?.message}</span>}
                            </label>
                        </div>


                        {/* email field */}



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your email adddress</span>
                            </label>
                            <input type="text" placeholder="eamil" className="input input-bordered w-full max-w-xs"
                                 {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email && <span className="label-text-alt text-warning">{errors.email?.message}</span>}
                            </label>
                        </div>


                        {/* password field  */}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Chose a strong password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.password && <span className="label-text-alt text-warning">{errors.password?.message}</span>}
                            </label>
                        </div>
                        <div className="card-actions justify-end">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <p className='text-sm  mb-5 text-center'>Already have an account? <span className='cursor-pointer text-yellow-600' onClick={()=>navigate('/login')}>Log in</span> </p>
                    {/* signin with google button  */}
                    <div className=" w-full max-w-xs mx-auto mb-10">
                        <button className="btn w-full max-w-xs " onClick={handleGoogleSignin}>Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;