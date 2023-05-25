import React from 'react';
import img from '../../assets/newsletter.jpg'

const Newsletter = () => {
    return (

        <div  className="flex flex-col md:flex-row bg-slate-300">
            <div   className="w-1/2 p-8">
                <img 
                    src={img}
                    alt="Your Image"
                    className="max-w-full md:w-[900px] h-[600px] my-4"
                />
            </div>
            <div className="w-1/2 m-12">
                <h1 className="text-5xl font-bold italic text-orange-500 p-8">Become a EdutoYs Fan!</h1>
                <h5 className='text-2xl font-semibold italic  p-4'>- Be the first to hear about new Lottie Dolls</h5>
                <h5 className='text-2xl font-semibold italic p-4'>-  Help to inspire the latest Lottie Dolls and Accessories</h5>
                <h5 className='text-2xl font-semibold italic p-4'>- Suggest new ideas & activities you’d love to see</h5>
                <h5 className='text-2xl font-semibold italic p-4'>- Take part in exclusive launch team competitions</h5>


                <div className="flex gap-4">

                    <input  type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs bg-white" />
                    <button className="btn btn-secondary">Subscribe</button>
                </div>
                <h5 className='text-2xl font-semibold italic  p-4'>*Unsubscribe at any time!</h5>
                <h5 className='text-2xl font-semibold italic '>We will never share or sell your data.</h5>
            </div>
        </div>

    );
};

export default Newsletter;