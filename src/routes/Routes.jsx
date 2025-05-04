import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
               
            index:true,
            path:'/',
            loader:()=>fetch('doctor.json'),
            Component:Home 
            },
            {
                path:'/doctorDetails/:id',
                loader:()=>fetch('doctor.json'),
            Component:DoctorDetails
                
            },

            {
                path:'/my-Bookings',
                loader:()=>fetch('doctor.json'),
                Component:MyBookings
            },
            {
                path:'/blogs',
                Component: Blogs
            }
        ]
    }
])