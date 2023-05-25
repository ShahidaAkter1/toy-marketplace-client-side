import React from 'react';
import img1 from '../../assets/image/blog/1.webp'
import img2 from '../../assets/image/blog/2.avif'
import img3 from '../../assets/image/blog/3.avif'
import img4 from '../../assets/image/blog/4.avif'

const NewPost = () => {
    return (
        <div>
        <h1 className='text-center my-12 font-bold text-4xl text-black  italic'>RECENT POSTS IN OUR PLAY BLOG</h1>

       <div  className='grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       
        <div data-aos="flip-left" className="card  card-compact w-96 bg-white shadow-xl">
            <figure><img className='h-[200px]  w-full' src={img2} /></figure>
            <div className="card-body">
                <h2 className="card-title">The Importance of Outdoor Play</h2>
                <p>Outdoor toys can provide hours of fun and entertainment for children, as well as numerous developmental benefits. Outdoor play can help children develop gross motor skills, such as running, jumping, and throwing, as well as fine motor skills, such as gripping and manipulating toys.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96 bg-white shadow-xl">
            <figure><img className='h-[200px]  w-full' src={img3} /></figure>
            <div className="card-body">
                <h2 className="card-title">15 Book Suggestions for Children's Summer Reading Lists</h2>
                <p>Summer reading logs are a great way to encourage children to read during their summer break. By keeping track of the books they read, children are motivated to read more and stay engaged with reading throughout the summer.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96 bg-white shadow-xl">
            <figure><img className='h-[200px]  w-full' src={img4} /></figure>
            <div className="card-body">
                <h2 className="card-title">25 Spring Activities to Do with Your Kids!</h2>
                <p>Spring has arrived and that means sunny days are ahead of us! It's time to get outside and explore nature with your whole family. There are plenty of fun spring activities that you can do with your kids.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
       </div>


    </div>
    );
};

export default NewPost;