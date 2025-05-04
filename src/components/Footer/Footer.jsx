import React from 'react';

import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const links=<>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/'><li>Home</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/my-Bookings'><li>My-Bookings</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/blogs'><li>Blogs</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/contact'><li>Contact Us</li></NavLink>
    </>

     return(
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <div className='flex'>
                        <img src={logo} alt="" className='w-8 h-8'/>
                    <a className=" text-3xl font-bold">Phudu</a>
                    </div>
  <nav className="flex gap-4 list-none">
    {links}
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://x.com/'>
      <FaSquareXTwitter  className='w-6 h-6'></FaSquareXTwitter>
      </a>
      <a href='https://www.youtube.com/'>
      <FaYoutube className='w-6 h-6'></FaYoutube>
      </a>
      <a href='https://www.facebook.com/'>
      <FaFacebookF className='w-6 h-6'></FaFacebookF>
      </a>
      <a href="https://www.linkedin.com/"><FaLinkedin className='w-6 h-6'></FaLinkedin></a>
    </div>
  </nav>
  
</footer>
        </div>
    );
};

export default Footer;