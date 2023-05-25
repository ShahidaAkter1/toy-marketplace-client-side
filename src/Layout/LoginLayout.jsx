import React from 'react';
import { Outlet } from 'react-router-dom';
 
import Footer from '../Shared/Footer';
import ResponsiveHeader from '../Shared/ResponsiveHeader';

const LoginLayout = () => {
    return (
        <div>
          <ResponsiveHeader></ResponsiveHeader>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default LoginLayout;