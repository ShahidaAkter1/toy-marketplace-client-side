import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

  const toyDetails = useLoaderData();

  const { _id, toyName, photo, seller, email, category, price, rating, quantity, details } = toyDetails;
  // console.log(toyDetails);

  return (
    //
    <div className=' my-12 '>
      <h1 className="text-6xl text-center mb-8 text-red-600 font-bold ">{toyName}</h1>

      <div className="hero bg-gray-300 mb-8 rounded-xl p-4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold"> Seller name: <span className='text-orange-600 font-bold'>{seller}</span></h1>
            <p className="py-6">Seller Email:<span className='text-orange-600 font-bold'>{email}</span></p>

          </div>
        </div>
      </div>




      <div className="hero  bg-slate-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl h-[400px]" />
          <div className="card-body px-6 ">
            {/* <h1 className="text-2xl font-bold text-orange-600">Toy name: <span className='text-black'> 
                      {toyName}</span></h1>  */}
            <p className="text-xl text-orange-600 font-bold">Category: <span className='text-black font-normal'>
              {category}</span></p>
            <p className="text-xl text-orange-600 font-bold">Price: <span className='text-black  font-normal'>
              $ {price}</span> </p>
            <p className="text-xl text-orange-600 font-bold">Quantity:<span className='text-black  font-normal'>
              {quantity}</span> </p>
            <p className="text-xl text-orange-600 font-bold">Ratings:<span className='text-black ml-2  font-normal'>
              

            <Rating
            
                 
                 placeholderRating={rating}
                 readonly
                 emptySymbol={<FaRegStar></FaRegStar>}
                 placeholderSymbol={<FaStar className='text-blue-700'></FaStar>}
                 fullSymbol={<FaStar></FaStar>}
             />
              
              
              </span> </p>
            <p className="text-xl mb-6 text-orange-600 font-bold"> Details: <span className='text-black  font-normal'>
              {details}</span></p>

          </div>
        </div>
      </div>
    </div>






  );

};

export default ToyDetails;