import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/Login.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const Registration = () => {
  useTitle('Registration')

const {createAccount}=useContext(AuthContext)

  const handleSignUp=event=>{
   event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log(name, password,email,photo);
        createAccount(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // notify();
                form.reset();
                toast("Successfully registered!!!")
            })
            .catch((error) => {
                console.log(error);
                toast("  Registration Failed!!!");
                 
                 
            })





  }



    return (
        <div className="hero min-h-screen bg-gray-300">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img}  className='h-[620px] rounded-2xl'  alt="" />
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl text-white text-center font-bold italic">Sign Up</h1>
            
            
            <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' required placeholder="name" className="input input-bordered text-white" />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered text-white" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' required placeholder="photo url" className="input input-bordered text-white" />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Password</span>
                </label>
                <input type="text" name='password' required placeholder="password" className="input input-bordered text-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <input className="btn btn-secondary text-white" type="submit" value="Sign UP" />
              </div>
            </form>
            <p className='my-4 text-center text-white'>Already have an account? <Link className='text-red-600 font-bold' to='/login'>Login</Link> </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Registration;