import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';


const Root = () => {
    return (
        <div className=' mx-auto bg-gray-200 plus-jakarta-sans'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;