import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const SingleCardMyToys = ({ toy }) => {

    const { _id, toyName, photo, seller, email, category, price, rating, quantity, details } = toy;


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://doll-server-mu.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your Toy has been deleted',
                                'success'
                            )
                            const remaining = toy.filter(toy => toy._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        })

    }


    return (

        <>
            {/* view modal */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box w-8/12 max-w-5xl bg-white">

                    <div className="hero-content flex-col lg:flex-row gap-12">
                        <img src={photo} className="max-w-sm  h-[500px] rounded-2xl shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"> <span>{toyName}</span></h1>
                            <p className="py-2 text-orange-400 font-bold text-2xl ">Category: <span className='text-black font-normal text-lg'>{category}</span></p>
                            <p className="py-2 text-orange-400 font-bold text-2xl ">Price:<span className='text-black font-normal text-lg'>${price}</span> </p>

                            <p className="py-2 text-orange-400 font-bold text-2xl ">Quantity: <span className='text-black font-normal text-lg'>{quantity}</span></p>
                            <p className="py-2 text-orange-400 font-bold text-2xl ">Rating: <span className='text-black font-normal text-lg'>

                                <Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </span></p>
                            <p className="py-2 text-orange-400 font-bold text-2xl ">Description:<span className='text-black font-normal text-lg'>{details}</span> </p>
                            <label htmlFor="my-modal-5" className="btn btn-primary">Done</label>
                        </div>
                    </div>
                </div>
            </div>










            <div className="card w-96 bg-base-100 shadow-xl  bg-white ">

                <figure><img src={photo} alt="Shoes" className='h-[300px]' /></figure>

                <div className="card-body">
                    <p className='font-bold text-2xl'> {toyName}</p>
                    <p>Price : {price}</p>
                    <p>Category : {category}</p>


                    <hr className='mb-4' />
                    <div className="card-actions justify-between">
{/* 
                        <label htmlFor="my-modal-5" className="btn btn-active btn-primary">View</label> */}
                        
                        
                        <Link to={`/alltoys/${_id}`}> <button className="btn btn-active btn-secondary">View</button></Link>


                        <Link to={`/mytoys/${_id}`}> <button className="btn btn-active btn-secondary">Update</button></Link>

                        <button onClick={() => handleDelete(_id)} className="btn btn-active btn-warning">Delete</button>
                    </div>
                </div>
            </div>






        </>


    );
};

export default SingleCardMyToys;