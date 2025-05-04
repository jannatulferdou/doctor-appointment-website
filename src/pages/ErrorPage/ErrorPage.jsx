import React from 'react';
import ErrorImg from '../../assets/error.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center'>
           <img src={ErrorImg} alt="" className='w-100 relative left-110 mb-6' />
           <div>
            <h1 className='text-red-400 text-3xl font-bold mb-5'>404- Page Not Found</h1>
            <p>Opps! The page you are looking for is not found</p>
            <Link to='/'><button className='btn bg-[#176AE5] text-white mt-5'>Go Back Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;