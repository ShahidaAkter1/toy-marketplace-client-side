import React from 'react';
import TabSingleData from './TabSingleData';

const TabMath = ({ math }) => {
    return (
        <div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-4 md:gap-y-4 mt-8'>
                {
                    math.map(data => <TabSingleData
                        data={data}
                        key={data._id}
                    ></TabSingleData>)
                }
            </div>
        </div>
    );
};

export default TabMath;