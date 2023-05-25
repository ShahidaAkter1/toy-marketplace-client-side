import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';
import { AuthContext } from '../../Provider/AuthProvider';
import LoadingPage from '../../Components/LoadingPage';

const AllToys = () => {
  useTitle('All Toys')

  const [searchText, setSearchText] = useState("");

  //refresh page
  function refreshPage() {
    window.location.reload(false);
  }

  const toyData = useLoaderData();
  const [allData, setAllData] = useState(toyData);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const searchValue = form.search.value;
  //   // console.log(searchValue);
  //   // console.log(typeof searchValue);
  //   const searchData = allData.filter(data => data.toyName === searchValue);
  //   // console.log(searchData);
  //   setAllData(searchData);
  //   form.reset();
  // }

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.search.value;
    // console.log(searchValue);
    // console.log(typeof searchValue);
    const searchData = allData.filter(data => data.toyName.includes(searchValue));
    //  console.log(searchData);
    setAllData(searchData);
    form.reset();
  }

  //search
  const handleNewSearch = () => {
    fetch(`https://doll-server-mu.vercel.app/toySearchByTitle/${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllData(data);
      })
  }

  //loading page
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }


  return (
    <div>
      <h1 className='text-center text-6xl mb-4 bg-slate-300 p-4'>All Toys</h1>

      <input onChange={(e) => { setSearchText(e.target.value) }} type="text" name='search' placeholder="Type here" className="input text-black  input-bordered   w-7/12 ml-8  bg-white " />
      <button onClick={handleNewSearch} className="btn btn-primary ml-4">Search</button>
      <button onClick={refreshPage}   className="btn text-black font-bold btn-success ml-4">Refresh  </button>
 



      <div className="overflow-x-auto my-8 mx-8">
        <table className="table table-compact w-full  bg-white ">
          <thead  >
            <tr className='bg-blue-500'>
              <th className='text-white p-4 bg-blue-600'>Image</th>
              <th className='text-white p-4 bg-blue-600'>Seller Name</th>
              <th className='text-white p-4 bg-blue-600'>Toy Name</th>
              <th className='text-white p-4 bg-blue-600'>Sub-category</th>
              <th className='text-white p-4 bg-blue-600'>Price</th>
              <th className='text-white p-4 bg-blue-600'>Available Quantity</th>
              <th className='text-white p-4 bg-blue-600'>Details</th>
            </tr>
          </thead>
          <tbody>

            {
              allData.map(singleData => <SingleCard

                key={singleData._id}
                singleData={singleData}
              ></SingleCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;