import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToys = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    useTitle('Add Toys');


    const handleAddToy = event => {

        // console.log('clicked');

        event.preventDefault();
        const form = event.target;

        const toyName = form.tname.value;
        const photo = form.url.value;
        const seller = form.sname.value;
        const email = form.email.value;
        const password = form.password.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.ratings.value;
        const quantity = form.quantity.value;
        const details = form.description.value;

        const newToy = { toyName, photo, seller, email,password, category, price, rating, quantity, details };
        // console.log(newToy);

        // const toy={photo}

        fetch('https://doll-server-mu.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
            })

    }

    return (

        <div className='mb-20  '>
            <h1 className='text-center text-6xl mb-4 bg-slate-300 p-4'>Add Toys</h1>


            <form onSubmit={handleAddToy}>
                <div className='mt-8'>

                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Toy Name</span>
                        </label>
                        <input type="text" required name='tname' placeholder="Toy Name" className="input input-bordered bg-white  border-b-4 text-black border-b-black" />
                    </div>


                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Picture URL</span>
                        </label>
                        <input type="text" required name='url' placeholder="Picture URL" className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>


                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Seller Name (if available from logged in user)</span>
                        </label>
                        <input type="text" name='sname' defaultValue={user?.displayName} className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>


                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Seller Email</span>
                        </label>
                        <input type="text" required name='email' defaultValue={user?.email} placeholder="Seller email" className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>

                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Seller Email Password</span>
                        </label>
                        <input type="text" required name='password' defaultValue={user?.password} placeholder="Seller email password" className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>


                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Sub-Category</span>
                        </label>
                        <input type="text" required name='category' placeholder="ex: learning " className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>

                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black-200">Price </span>
                        </label>
                        <input type="text" required name='price' placeholder="ex:  1099 " className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>

                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Rating</span>
                        </label>
                        <input type="text" required name='ratings' placeholder="Rating" className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>

                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Available Quantity</span>
                        </label>
                        <input type="text" required name='quantity' placeholder="Available Quantity " className="input input-bordered bg-white  border-b-4 text-black  border-b-black" />
                    </div>



                    <div className="form-control mx-32  ">
                        <label className="label">
                            <span className="label-text text-black">Detail Description</span>
                        </label>
                        <textarea className="textarea textarea-success  bg-white " required name='description' placeholder="Detail description"></textarea>
                    </div>


                    <div className="form-control mx-32 mt-8 ">
                        <button className="btn btn-active btn-primary">Add Toy</button>
                    </div>





                </div>
            </form>
















        </div>


























        //     <div className=" bg-gray-300 text-center">
        //     <h2 className='text-amber-500 mb-6 font-bold text-7xl'>Contact Sales</h2>
        //    <p className='text-black mb-8 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus quas ut cum soluta exercitationem consequatur rerum mollitia, possimus ducimus sit, explicabo vel dolore veritatis a suscipit optio delectus nisi.</p>

        //    <div className='text-center'>
        //    <div className='flex gap-4'>
        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">First Name</span>
        //         </label>
        //         <label className="input-group text-white" >
        //             <span>First Name</span>
        //             <input type="text" placeholder="First Name" className="input input-bordered" />
        //         </label>
        //     </div>
        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">Last Name</span>
        //         </label>
        //         <label className="input-group text-white">
        //             <span>Last Name</span>
        //             <input type="text" placeholder="Last Name" className="input input-bordered" />
        //         </label>
        //     </div>
        //    </div>

        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">Company</span>
        //         </label>
        //         <label className="input-group text-white">
        //             <span>Company</span>
        //             <input type="text" placeholder="Enter Your Company Name" className="input input-bordered" />
        //         </label>
        //     </div>
        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">Your Email</span>
        //         </label>
        //         <label className="input-group text-white">
        //             <span>Email</span>
        //             <input type="text" placeholder="info@site.com" className="input input-bordered" />
        //         </label>
        //     </div>

        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">Phone Number</span>
        //         </label>
        //         <label className="input-group text-white">
        //             <span>Phone</span>
        //             <input type="text" placeholder="Enter Phone Number" className="input input-bordered" />
        //         </label>
        //     </div>
        //    <div className="form-control">
        //         <label className="label">
        //             <span className="label-text text-black">Message</span>
        //         </label>
        //         <label className="input-group text-white">
        //             <span>message</span>
        //             <textarea className="textarea textarea-primary text-white" placeholder="message"></textarea>
        //         </label>
        //     </div>
        //     <button className="btn btn-block my-4 p-4 btn-primary">block</button>
        //    </div>
        // </div>
    );
};

export default AddToys;