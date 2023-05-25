// import img from '../../assets/images/login.png';
import { useContext } from 'react';
import img from '../assets/Login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


import { FaGoogle } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';
const Login = () => {
  useTitle('Login')

  const { login,signInGoogle } = useContext(AuthContext);
  // console.log(login);
const navigate=useNavigate();
  const handleLogin = (event) => {
    console.log('clicked');
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        navigate('/')
        form.reset();
        toast("Successfully Login!!!");

      })
      .catch((error) => {
        console.log(error);
        toast("  Login Failed!!!")
      })
  }


  const handleGoogle=()=>{

    signInGoogle()
    .then(res=>{
       const user=res.user;
       navigate('/');
       // console.log(user);
      //  navigate(from,{replace:true});
       toast('Successfully Login With Google!!!')

    })
    .catch(error=>{
       // console.log(error);
       toast('  Login failed With Google!!!')
    })

  }



  return (
    <div className="hero min-h-screen bg-gray-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={img} className='h-[450px] rounded-2xl' alt="" />

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <div className="card-body">
            <h1 className="text-5xl text-red-600 text-center font-bold italic">LOGIN</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">Email</span>
                </label>
                <input type="text" name='email' required placeholder="Email" className="input input-bordered bg-white text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">Password</span>
                </label>
                <input type="text" name='password' required placeholder="Password" className="input input-bordered bg-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" type="submit" value="Login" />
              </div>

            </form>




            <p className='my-4 text-center'>New to Doll website? <Link className='text-red-500 font-bold' to='/signup'>Sign Up</Link> </p>
            <div className="form-control mt-6">
              {/* <FaGoogle> </FaGoogle> */}
              <input onClick={handleGoogle} className="btn btn-primary" type="submit" value="Login with Google" />
              {/*  */}
            {/* <Link>  <input onClick={handleGoogle} className="btn btn-primary" type="submit" value="Login with Google" /></Link> */}
            </div>

          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;