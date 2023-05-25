import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logomain from '../assets/logoMain.jpg'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ResponsiveHeader = () => {

    const { user, logout } = useContext(AuthContext);
    const name = user?.displayName;
    const profilePhoto = user?.photoURL;

    const handleLogout = () => {
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
        <div>
            <div className="navbar  bg-primary ">


                <div className="navbar-start">


                    <div className="dropdown  ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden  ">
                            <svg   xmlns="http://www.w3.org/2000/svg" className="h-5 w-5   text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  bg-white">
     








                            <li>  <Link to='/' className='mr-6'>Home</Link></li>
                            <li><Link to='/alltoys' className='mr-6'> All Toys</Link></li>
                            <li>
                                {user ?
                                    <>
                                        <Link to='/mytoys' className='mr-6'>My Toys</Link>
                                        <Link to='addtoys' className='mr-6'>Add Toys</Link>
                                    </> :
                                    <></>
                                }
                            </li>

                            <li><Link to='/blog' className='mr-6'>Blog</Link></li>
  





                        </ul>
                    </div>






                    <div className="flex">
                        <img src={logomain} className='rounded-full h-12 w-12' alt="" />
                        <a className="btn btn-ghost normal-case text-xl text-white">Edu <span className=' text-red-200'>toYS</span></a>
                    </div>


                </div>



                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
   





                        <li>  <Link to='/' className='mr-6'>Home</Link></li>
                        <li><Link to='/alltoys' className='mr-6'> All Toys</Link></li>
                        <li>
                            {user ?
                                <>
                                    <Link to='/mytoys' className='mr-6'>My Toys</Link>
                                    <Link to='addtoys' className='mr-6'>Add Toys</Link>
                                </> :
                                <></>
                            }
                        </li>

                        <li><Link to='/blog' className='mr-6'>Blog</Link></li>
 






                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user ?
                            <Link to='/login' className='mr-6'><button className="btn btn-active btn-warning " onClick={handleLogout}>Logout</button></Link> :

                            <Link to='/login' className='mr-6'><button className="btn btn-active btn-warning bg-white text-black font-bold">Login</button></Link>
                    }

                    <div className="w-10 rounded-full mr-">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full mr-">
                                {user &&
                                    <>
                                        <img src={profilePhoto ? profilePhoto : <FaUser></FaUser>} title={name} />   </>
                                }
                            </div>
                        </label>
                    </div>


                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResponsiveHeader;