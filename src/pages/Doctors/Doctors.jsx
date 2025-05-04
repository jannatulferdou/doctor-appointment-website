import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doctors}) => {

    const [visibleDoctors, setVisibleDoctors] = useState(6);

    
    return (
        <div className='mx-auto max-w-270 mt-20 mb-20'>
           <div className='text-center'>
           <h1 className='text-4xl font-extrabold text-center relative mb-6'>Our Best Doctors</h1>
           <p className='w-[1000px] relative left-10  mb-8 text-gray-600 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
           <Suspense fallback={<span>loading..</span>}>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full mb-12 object-cover '>
                {
                    doctors.slice(0, visibleDoctors).map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </div>
           </Suspense>
            <button onClick={() => setVisibleDoctors(doctors.length)} className='btn rounded-full bg-[#176AE5] text-white relative left-120'>View All Doctors</button>
        </div>
    );
};

export default Doctors;