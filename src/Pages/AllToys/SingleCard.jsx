import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SingleCard = ({ singleData }) => {
    // console.log(singleData);
    const { _id, toyName, photo, seller, email, category, price, rating, quantity, details } = singleData;
    const count = 0;
    let sum = count + 1;

    const { user } = useContext(AuthContext);

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

        <tr  >

            <td className='bg-white text-black border-b-sky-400 '>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td className='bg-white text-black border-b-sky-400 '>{seller}</td>
            <td className='bg-white text-black border-b-sky-400 '>{toyName}</td>
            <td className='bg-white text-black border-b-sky-400 '>{category}</td>
            <td className='bg-white text-black border-b-sky-400 '>{price}</td>
            <td className='bg-white text-black border-b-sky-400 '>{quantity}</td>
            <td className='bg-white text-black border-b-sky-400 '>

                <Link to={`/allToys/${_id}`}> <button onClick={handleAlert} className="btn  btn-success ">Details</button></Link>


            </td>
        </tr>





    );
};

export default SingleCard;