import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name,data.photoURL)
                .then(()=>{
                    console.log("user profile info updated")
                    reset()
                }).catch(error=>console.log(error))
                // reset()
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='text-red-600'>Name is require</p >}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered" />
                            {errors.photoURL?.type === 'required' && <p className='text-red-600'>photoURL is require</p >}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-600'>Email is require</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register('password', {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
                            })} className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is require</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 8 character</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 character</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Minimum eight characters, at least one uppercase letter, one lowercase letter and one number</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='text-center'><small>Already Signed up Here?</small><small className='text-blue-600'> <Link to="/login">Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;