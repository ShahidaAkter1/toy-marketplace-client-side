import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
const TabSingleData = ({ data }) => {

    const { user } = useContext(AuthContext);
    const { _id, toyName, photo, seller, email, category, price, rating, quantity, details } = data;

    const handleAlert = () => {
        if (user) {

        }
        else {
            let timerInterval
            Swal.fire({
                title: 'Auto close alert!',
                html: 'You need to Login First',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
    }


    return (
        <div className="card card-compact w-96 shadow-xl ">
            <figure><img className='h-[300px]' src={photo} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold text-4xl ">{toyName}</h2>
                <p className='text-red-400 font-bold text-xl'>Category: <span className='text-black font-thin text-xl'>{category}</span></p>
                <p className='text-red-400 font-bold text-xl'>Price: <span className='text-black font-thin text-xl'>{price}</span></p>
                <p className='text-red-400 font-bold text-xl'>Rating: <span className='text-black font-thin text-xl'> 
                
                <Rating
                 
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />
                </span></p>


                {/* <p className='text-red-400 font-bold text-xl'>Quantity: <span className='text-black font-thin text-xl'>{quantity}</span></p>
            <p className='text-red-400 font-bold text-xl'>Details: <span className='text-black font-thin text-xl'>{details}</span></p> */}
 



                <div className="card-actions justify-center">
                    <Link to={`/allToys/${_id}`}>  <button onClick={handleAlert} className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TabSingleData;