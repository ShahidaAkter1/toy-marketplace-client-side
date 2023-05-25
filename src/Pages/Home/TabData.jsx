import React from 'react';
// import image from '../../assets/error.jpg'
import TabSingleData from './TabSingleData';

const TabData = ({ science }) => {
    // console.log('science  :: ',science);

    // const {_id, toyName, photo, seller, email, category, price, rating, quantity, details }=science;
    return (
        <div>
           

            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-4 md:gap-y-4 mt-8'>

            
            {
                science.map(data=><TabSingleData
                data={data}
                key={data._id}
                ></TabSingleData>)
            }



 

            </div>

        </div>
    );
};

export default TabData;