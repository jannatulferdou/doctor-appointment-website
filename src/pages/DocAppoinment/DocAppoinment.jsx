import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DocAppoinment = ({ doctorDetails }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
    const alreadyBooked = bookedDoctors.some(doctor => doctor.id === doctorDetails.id);

    if (alreadyBooked) {
      toast.warn('You already have an appointment with this doctor!');
    } else {
      const updatedDoctors = [...bookedDoctors, doctorDetails];
      localStorage.setItem('bookedDoctors', JSON.stringify(updatedDoctors));
      toast.success(`Appointment scheduled for ${doctorDetails.name} successfully`);
      navigate('/my-Bookings');
    }
  };

  return (
    <div className="bg-white px-8 pt-8 pb-13 rounded-2xl mx-auto max-w-270 shadow-md mt-20">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
      <div className="flex justify-between items-center mb-2 border-y-1 border-dashed py-3 border-gray-300">
        <h3 className="font-semibold text-gray-700">Availability</h3>
        <button className="bg-green-100 text-green-700 py-1 px-2 rounded-full text-sm">
          Doctor Available Today
        </button>
      </div>
      <div className="bg-[#f7f0e2] text-[#FFA000] p-3 rounded-full mb-4 flex items-center mt-4">
        <IoInformationCircleOutline className="mr-2" ></IoInformationCircleOutline>
        <span className="text-sm">Due to high patient volume, we are currently accepting appointments for today only.</span>
      </div>
      <button
        onClick={handleBooking}
        className="bg-[#176AE5] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full text-center mt-7"
      >
        Book Appointment Now
      </button>
    </div>
  );
};

export default DocAppoinment;
