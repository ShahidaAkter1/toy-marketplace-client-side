import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

  const singleData = useLoaderData();
  const { price, _id, quantity, details } = singleData;
  // console.log(singleData);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    console.log(price, quantity, details);
    const updatedData = { price, quantity, details };

    // console.log(updatedData);


    //send data
    fetch(`https://doll-server-mu.vercel.app/toy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        navigate('/mytoys');

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy information updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })


  }



  return (
    <div>

      <h3 className="font-bold text-5xl text-red-500 text-center mt-16">Update Toy Information</h3>

      <hr className='text-6xl mt-4' />

      <div className='mx-[10%] mt-4'>
        <form onSubmit={handleUpdate} action="">

          <div className=" ">

            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-black font-bold">Price</span>
              </label>

              <input type="text" defaultValue={price} name='price' placeholder=" Price" className="file-input border-none p-8 file-input-bordered   file-input-md w-full text-2xl py-8 bg-white border-b-8 border-b-black mb-4" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-black font-bold">Quantity</span>
              </label>
              <input type="text" defaultValue={quantity} name='quantity' placeholder="Quantity" className="input text-2xl border-none p-8  input-bordered w-full  bg-white border-b-8 py-18 border-b-black mb-4" />
            </div>

            <div className="form-control">
              <p className='ml-2 mb-2 mt-2 text-2xl text-black font-bold'>Description</p>

              <textarea placeholder="Bio" defaultValue={details} name='details' className="textarea border-none p-8  textarea-bordered textarea-sm w-full h-72  bg-white border-b-8 border-b-black my-8  text-2xl" >


              </textarea>
            </div>

            <div className="modal-action">
              <button className="btn btn-active btn-secondary w-full text-2xl  mb-16 ">Update</button>

            </div>

          </div>
        </form>

 
      </div>

    </div>
  );
};

export default Update;