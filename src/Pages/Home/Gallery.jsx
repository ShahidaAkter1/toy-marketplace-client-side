import React from 'react';
import img1 from '../../assets/image/engineering/1.jpg'
import img2 from '../../assets/image/engineering/2.jpg'
import img3 from '../../assets/image/engineering/3.jpg'
import img4 from '../../assets/image/math learning toy/1.jpg'
import img5 from '../../assets/image/math learning toy/2.jpg'
import img6 from '../../assets/image/math learning toy/3.jpg'
import img7 from '../../assets/image/math learning toy/4.jpg'
import img8 from '../../assets/image/science learning toy/1.jpg'
import img9 from '../../assets/image/science learning toy/2.webp'
import img10 from '../../assets/image/science learning toy/3.jpg'
import img11 from '../../assets/image/science learning toy/4.jpg'
import img12 from '../../assets/image/engineering/4.jpg'

import Marquee from "react-fast-marquee";


const Gallery = () => {
  return (
    <div className='my-12'>

      <h1 data-aos="zoom-in-left" className='text-4xl text-black font-bold text-center mb-10 '>Gallery</h1>
      <div>
        <Marquee direction="left" speed={100} delay={5}>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img4} alt="" />
          </div>
          <div>
            <img className='h-[200px]' src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img10} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img className='h-[200px]' src={img12} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;