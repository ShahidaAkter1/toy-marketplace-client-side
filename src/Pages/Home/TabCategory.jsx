import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TabData from './TabData';
import TabMath from './TabMath';
import TabEngineering from './TabEngineering';



const TabCategory = ({ allData }) => {

    // console.log(allData);

    const math = allData.filter(data => data.category === "math");
    // console.log(math);
    const science = allData.filter(data => data.category === "science");
    // console.log(science);
    const engineering = allData.filter(data => data.category === "engineering");
    // console.log(engineering);


    return (
        <div  data-aos="zoom-out-right" className='my-8 text-center'>
            <h1   className='mb-8 text-4xl font-bold'>Category</h1>
            <Tabs  >
                <TabList className='bg-blue-300 py-4 ' >
                    <Tab>Science Toys</Tab>
                    <Tab>Math Learning Toys</Tab>
                    <Tab>Engineering Toys</Tab>
                </TabList>



                <TabPanel >

                    <TabData
                        science={science}
                    ></TabData>
                </TabPanel>



                <TabPanel>
                    <TabMath
                        math={math}
                    ></TabMath>
                </TabPanel>

                <TabPanel>

                    <TabEngineering
                        engineering={engineering}
                    ></TabEngineering>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default TabCategory;