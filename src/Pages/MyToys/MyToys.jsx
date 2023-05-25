import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import LoadingPage from '../../Components/LoadingPage';
import img from '../../assets/newsletter.jpg'
import { useLoaderData } from 'react-router-dom';
import SingleCardMyToys from './SingleCardMyToys';

const MyToys = () => {
  useTitle('My Toys');

  const allData=useLoaderData();
  // console.log(allData);
  //loading page
  const { loading,user } = useContext(AuthContext);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }


  // const newFilteredArray=[];
  // for(const toy of allData){
  //   // console.log(toy);
  //   if(toy.email===user?.email){
  //     newFilteredArray.push(toy);
  //   }
  // }
  // console.log(newFilteredArray);

  const newArray=allData.filter(toy=>toy.email===user.email);
  // console.log(newArray);







  return (
    <div className='mb-28'>
      <h1 className='text-center text-6xl mb-4 bg-slate-300 p-4 mb-8'>My Toys</h1>

      {/* my toy card design */}
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      
      
        {/* <div className="card w-96 bg-base-100 shadow-xl  bg-white ">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <p>Details</p>
            <p>Details</p>
            <hr className='mb-4' />
            <div className="card-actions justify-between">
              <button className="btn btn-active btn-primary">View</button>
              <button className="btn btn-active btn-secondary">Update</button>
              <button className="btn btn-active btn-warning">Delete</button>
            </div>
          </div>
        </div>
  */}

  {
    newArray.map(toy=><SingleCardMyToys
     toy={toy}
     key={toy._id}
    
    ></SingleCardMyToys>)
  }
 
 
 

      </div>
 



    </div>
  );
};

export default MyToys;




