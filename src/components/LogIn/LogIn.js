import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import generateToken from '../../utilities/generateToken';
import saveUser from '../../utilities/saveUser';
import toast from 'react-hot-toast';



const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    // user && saveUser(user.user.displayName,user.user.email)
    gUser && saveUser(gUser.user.displayName,gUser.user.email);

    const handleGoogleSignin = () => {
        console.log('ingn in is clicked')
        signInWithGoogle();

    }

    //error
    error && toast.error(error.message)
    gError && toast.error(gError.message)

    let from = location.state?.from?.pathname || "/";
    
    const onSubmit = data => {
        const {email,password}=data
        signInWithEmailAndPassword(email,password);
        console.log(data);
    }
    if (gUser) {
        console.dir('inside google user');
        console.log(gUser?.user?.email)
        const data = generateToken(gUser?.user?.email);
    }
    if(user|| gUser){
        navigate(from, { replace: true });
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-200 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <div className="card-body">
                            <h2 className="card-title">Log in</h2>

                            {/* Field for email */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Please provide your email',
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                </label>
                            </div>



                            {/* password field  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Provide your account password',
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                </label>
                                <p className='text-sm text-right cursor-pointer mb-5 text-yellow-600'>Forgot password?</p>
                            </div>

                            <div className="card-actions">
                                <button className="btn w-full max-w-xs ">Log in</button>
                            </div>

                            <div className="divider">OR</div>
                        </div>
                    </div>

                </form>
                <p className='text-sm  mb-5 text-center'>New user? <span className='cursor-pointer text-yellow-600' onClick={()=>navigate('/register')}>Register Here</span> </p>
                {/* signin with google button  */}
                <div className=" w-full max-w-xs mx-auto mb-10">
                    <button className="btn w-full max-w-xs " onClick={handleGoogleSignin}>Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;