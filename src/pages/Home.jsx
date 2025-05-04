import React from 'react';
import Banner from '../components/banner/Banner';
import Doctors from './Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Count from './counts/Count';


const Home = () => {

    const doctors=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
            <Count></Count>
        </div>
    );
};

export default Home;