import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Authprovider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/Firebase.config';

const Registration = () => {
    const auth = getAuth(app);
    const {user,createUser, logOut} = useContext(AuthContext)
     
    const navigate = useNavigate()
    const handleregistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name,email,password,photo);

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset();

            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => {
                    console.log("profile updated");
                    logOut();
                    navigate('/login')
                })
                .catch((error) => {
                    console.log(error.message);
                });
        })
        .catch(error => console.log(error))
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 m-12">
                    <img src='' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">registration </h1>
                        <form onSubmit={handleregistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account ? <Link className='text-yellow-500 font-bold' to='/login' >Log in </Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;