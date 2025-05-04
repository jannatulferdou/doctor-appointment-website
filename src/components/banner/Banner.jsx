import React from 'react';
import bannerImg1 from '../../assets/banner-img-1.png';
import bannerImg2 from '../../assets/banner-2.jpg';


const Banner = () => {
    return (
        <div className='  mx-auto text-center w-[1200px] py-16 px-25 border-2 border-white rounded-2xl bg-gradient-to-r from-gray-100 to-white '>
            <h1 className='text-5xl font-bold w-[917px] text-center relative left-10 mb-6'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='w-[1000px] relative  mb-8 text-gray-600 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex gap-8 relative left-40 mb-8 '>
            <input type="search" className=" rounded-full pl-8 bg-white shadow-md w-[600px] " placeholder="Search any doctor..." />
            <button className='btn text-white bg-[#176AE5] rounded-full'>Search Now</button>
            </div>
            <div className='flex gap-8'>
                <img src={bannerImg1} alt="" className='w-120 h-100 rounded-2xl' />
                <img src={bannerImg2} alt="" className='w-120 h-100 rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;