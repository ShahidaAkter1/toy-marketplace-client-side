import React, { useContext } from 'react';
import GetStarted from './GetStarted';
import Gallery from './Gallery';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import LoadingPage from '../../Components/LoadingPage';
import Newsletter from './Newsletter';
import TabCategory from './TabCategory';
import NewPost from './NewPost';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    useTitle('Home')
    const allData=useLoaderData();
    // console.log(allData);
 

    const { loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingPage></LoadingPage>;
    }





    return (
        <div>

            <GetStarted></GetStarted>
            <Gallery></Gallery>
            
            <TabCategory
              allData={allData}
            ></TabCategory>

            <NewPost></NewPost>
            <Newsletter></Newsletter>





        </div>
    );
};

export default Home;