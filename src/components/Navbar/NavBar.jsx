import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const links=<>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/'><li>Home</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/my-Bookings'><li>My-Bookings</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/blogs'><li>Blogs</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? "underline font-semibold" : ""} to='/contact'><li>Contact Us</li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm mb-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex'>
        <img src={logo} alt="" className='w-8 h-8'/>
    <a className=" text-3xl font-bold">Phudu</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-full bg-[#176AE5] text-white">Emergency</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;