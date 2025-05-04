import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DocFee = ({resetDocChart}) => {
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('bookedDoctors')) || []);

  const updateChartData = (doctors) => {
    const chartData = doctors.map(doc => ({
      name: doc.name,
      fee: parseInt(doc.fee) || 0,
      speciality: doc.speciality
    }));
    if (resetDocChart) resetDocChart(doctors);
  };

  useEffect(() => {
    const doctorData = localStorage.getItem('selectedDoctor');
    if (!doctorData) return;

    const doctor = JSON.parse(doctorData);
    const alreadyBooked = appointments.some(d => d.id === doctor.id);

    if (alreadyBooked) {
      toast.warn('You already have an appointment with this doctor!');
    } else {
      const updatedAppointments = [...appointments, doctor];
      localStorage.setItem('bookedDoctors', JSON.stringify(updatedAppointments));
      setAppointments(updatedAppointments);
      updateChartData(updatedAppointments);
    }

    localStorage.removeItem('selectedDoctor');
  }, []);

  const handleCancel = (id) => {
    const updated = appointments.filter(doc => doc.id !== id);
    localStorage.setItem('bookedDoctors', JSON.stringify(updated));
    setAppointments(updated);
    toast.error('Appointment cancelled');
    updateChartData(updated);
  };

  return (
    <div className="space-y-4">
      {appointments.map((doc) => (
        <div key={doc.id} className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold text-xl">{doc.name}</h3>
          <div className='justify-between flex mt-3 border-b-1 border-dashed border-gray-300 pb-4 mb-4'>
            <p className='text-gray-500'>{doc.education}</p>
            <p className='justify-end text-gray-500'>Appointment Fee: {doc.fee} Taka + Vat</p>
          </div>
          <button 
            onClick={() => handleCancel(doc.id)}
            className="text-[#FF0000] grow border-[#FF0000] border px-4 py-2 mt-3 rounded-full hover:bg-red-50 w-full cursor-pointer"
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default DocFee;