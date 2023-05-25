import React from 'react';
// import logo from  '../assets/logo.jpg'
// import logo1 from '../assets/logo1.jpg'
import logo from '../assets/logoMain.jpg'
import img1 from '../assets/image/1.webp'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-white bg-black">
            <div>
                <img src={logo} className='rounded-full h-24 w-24' alt="" />
                <p>EdutoYs<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title ">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">News Letter</span>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-white" />
                <img src={img1} className='h-20 w-full rounded-lg' alt="" />
            </div>
        </footer>
    );
};

export default Footer;