import React, { useContext } from 'react';
// import logo from '../assets/logo.jpg'
 
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';
import { stringify } from 'postcss';
import logomain from '../assets/logoMain.jpg'

const Header = () => {

    const {user,logout}=useContext(AuthContext);
    // console.log(user);
    // console.log(user.photoURL);

    const name=user?.displayName;
    const profilePhoto=user?.photoURL;
    // console.log(name,profilePhoto);
    // const email=JSON.stringify(user?.email);
    // console.log(email);



    const handleLogout=()=>{
        logout()
        .then(() => {
            toast('Succefully Logout')
        })
        .catch(error => {
            console.log(error);
            toast('Logout Failed!!!')
        })
    }

    return (

        <div className="navbar bg-primary text-primary-content ">
            <div className="flex-1">
                <img src={logomain} className='rounded-full h-12 w-12' alt="" />
                <a className="btn btn-ghost normal-case text-xl">Edu <span className=' text-red-200'>toYS</span></a>
            </div>






            <div className="flex-none gap-2">
                <div className='mr-4 '>
                    <Link to='/' className='mr-6'>Home</Link>
                    <Link to='/alltoys' className='mr-6'> All Toys</Link>
 
                    {user ?
                        <>
                        <Link to='/mytoys' className='mr-6'>My Toys</Link>                  
                        <Link to='addtoys' className='mr-6'>Add Toys</Link>
                        </>:
                        <></>
                    }

                    <Link to='/blog' className='mr-6'>Blog</Link>
                      {
                        user ?
                        <Link to='/login' className='mr-6'><button className="btn btn-active btn-warning "  onClick={handleLogout}>Logout</button></Link> :

                        <Link to='/login' className='mr-6'><button className="btn btn-active btn-warning bg-white text-black font-bold">Login</button></Link>
                      }
                </div>




                


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full mr-">
                            {  user && 
                              <>
                              <img src={profilePhoto ? profilePhoto : <FaUser></FaUser>}  title={name} />   </>
                            }                      
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </div>


 

    );
};

export default Header;