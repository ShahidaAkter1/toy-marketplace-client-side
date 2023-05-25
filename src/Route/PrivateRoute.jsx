import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import LoadingPage from '../Components/LoadingPage';
 
 
 

const PrivateRoute = ({children}) => {
   
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

  if(loading){
    return <LoadingPage></LoadingPage>  ;
  }

    if(user){
        return children;
    }
   
    return <Navigate to='/login' replace state={{ from:location }}  ></Navigate>

};

export default PrivateRoute;