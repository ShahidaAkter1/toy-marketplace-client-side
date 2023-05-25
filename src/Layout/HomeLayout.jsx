import React from 'react';
import { Outlet } from 'react-router-dom';
 
import Footer from '../Shared/Footer';
import ResponsiveHeader from '../Shared/ResponsiveHeader';

const HomeLayout = () => {
    return (
        <div>

            
            <ResponsiveHeader></ResponsiveHeader>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;