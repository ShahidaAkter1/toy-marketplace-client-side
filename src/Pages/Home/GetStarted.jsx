import React from 'react';
import toy from '../../assets/toyHome.jpg'
import { Link } from 'react-router-dom';


const GetStarted = () => {
    return (
        <div  className="hero   h-[50vh]" style={{ backgroundImage: `url(${toy})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md"  data-aos="flip-right"  >
                   
                    <h1 className="mb-5 text-5xl font-bold" data-aos="zoom-in-left">Hello there</h1>


                    <p className="mb-5">Educational toys play a vital role in fostering children's cognitive, social, and emotional development while making learning a fun and interactive experience.These toys encourage critical thinking, problem-solving skills, creativity, and enhance various aspects of early childhood development, such as fine motor skills and language acquisition.</p>
                 <Link to='/alltoys'><button className="btn btn-warning">Get Started</button></Link>
                </div>
            </div>
        </div>

    );
};

export default GetStarted;