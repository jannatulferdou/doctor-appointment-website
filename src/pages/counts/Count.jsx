import React from 'react';
import CountUp from 'react-countup';
import successDoc from '../../assets/success-doctor.png';
import successRev from '../../assets/success-review.png';
import successPatient from '../../assets/success-patients.png';
import successStuff from '../../assets/success-staffs.png';

const Count = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 mb-20'>
      {/* card-1 */}
      <div className="card bg-base-100 w-60 shadow-sm">
        <div className="card-body items-center text-center">
          <img src={successDoc} alt="" className='w-15 h-15 mb-2' />
          <h1 className='text-5xl font-extrabold'>
            <CountUp start={0} end={199} duration={10} />+
          </h1>
          <h5 className='text-xl font-semibold text-gray-500'>Total Doctors</h5>
        </div>
      </div>

      {/* card-2 */}
      <div className="card bg-base-100 w-60 shadow-sm">
        <div className="card-body items-center text-center">
          <img src={successRev} alt="" className='w-15 h-15 mb-2' />
          <h1 className='text-5xl font-extrabold'>
            <CountUp start={0} end={467} duration={10} />+
          </h1>
          <h5 className='text-xl font-semibold text-gray-500'>Total Reviews</h5>
        </div>
      </div>

      {/* card-3 */}
      <div className="card bg-base-100 w-60 shadow-sm">
        <div className="card-body items-center text-center">
          <img src={successPatient} alt="" className='w-15 h-15 mb-2' />
          <h1 className='text-5xl font-extrabold'>
            <CountUp start={0} end={1900} duration={10} />+
          </h1>
          <h5 className='text-xl font-semibold text-gray-500'>Patients</h5>
        </div>
      </div>

      {/* card-4 */}
      <div className="card bg-base-100 w-60 shadow-sm">
        <div className="card-body items-center text-center">
          <img src={successStuff} alt="" className='w-15 h-15 mb-2' />
          <h1 className='text-5xl font-extrabold'>
            <CountUp start={0} end={300} duration={10} />+
          </h1>
          <h5 className='text-xl font-semibold text-gray-500'>Total Staffs</h5>
        </div>
      </div>
    </div>
  );
};

export default Count;
