import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DocAppoinment from '../DocAppoinment/DocAppoinment';


const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();

  const doctorDetails = data.find(doctor => doctor.id === doctorId);

  const {image, name, education, speciality,hospital_name, registration_number, availability, fee}=doctorDetails;

  return (
    <div className='mb-20'>
     <div className='text-center border mx-auto max-w-270 py-18 rounded-2xl bg-white shadow-md border-hidden mb-8'>
     <h3 className='text-4xl font-bold'>Doctor’s Profile Details</h3>
      <p className='font-medium text-gray-600 text-base w-[900px] relative left-20 mt-4'>
      With decades of trusted experience and a commitment to excellence, <span className='font-bold'>Phudu</span> stands by your side in every step of your healthcare journey — from diagnosis to recovery. Because when it comes to your health, you deserve a partner who truly cares.
      </p>
     </div>

     <div>
        <div className="  mx-auto max-w-270 p-18 rounded-2xl bg-white shadow-md border-hidden ">
  <div className=" flex lg:flex-row gap-10 ">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl w-[335px] h-[383px]"
    />
    <div>
      <h1 className="text-4xl font-bold mb-3">{name}</h1>
      <p className=" font-medium text-gray-500">
       {education}
      </p>
      <p className='font-medium text-gray-500 mb-5'>{speciality}</p>
     <p className='font-medium text-gray-500 '>
     Working at 
     </p>

     <h4 className='text-xl font-bold mb-4'>{hospital_name}</h4>

     <p className='text-gray-600 mt-1 border-y-1 border-dashed border-y-gray-300 py-2 w-[550px]'>&reg; Reg No: {registration_number}</p>
     <div className='mt-6 flex  gap-4'>
        <h3 className=' font-bold mb-2'>Availability</h3>
        <div className="flex  gap-2">
    {availability.days.map((day, index) => (
      <button
        key={index}
        className="px-4 py-1 bg-gradient-to-r from-blue-200 to-blue-300 text-blue-800 rounded-full text-sm shadow-sm hover:shadow-md "
      >
        {day}
      </button>
    ))}

    
  </div>
  
    </div>
    <div>
        
        <p className="text-sm text-gray-600 mt-3">
  Time: <span className="font-medium text-[#FFA000]">{availability.time}</span>
</p>
    </div>

    <div className="mt-6">
  <p className="text-base">
    <span className="font-semibold text-black">Consultation Fee:</span>
    <span className="font-bold text-blue-600 ml-2">Taka : {fee}</span>
    <span className="text-gray-500 ml-2">(incl. Vat)</span>
    <span className="text-blue-600 ml-2 font-medium">Per consultation</span>
  </p>
</div>


    </div>
   
  </div>
  
</div>

     </div>
     <DocAppoinment doctorDetails={doctorDetails}></DocAppoinment>



      
    </div>
  );
};

export default DoctorDetails;
