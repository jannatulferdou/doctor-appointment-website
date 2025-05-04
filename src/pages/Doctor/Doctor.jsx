import React from 'react';
import { Link } from 'react-router';

const Doctor = ({doctor}) => {

    const {image, name, experience, education, registration_number, id}=doctor;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-6 w-full h-145">
  <figure>
    <img
      src={image}
      alt="Shoes" className='w-[250px] h-[235px] rounded-2xl'/>
  </figure>
  <div className="card-body">

    <div className='flex gap-4 relative -left-5 mb-4'>
        <button className='btn rounded-full text-[#09982F] bg-[#e6f0e9] text-sm font-medium'>Available</button>
        <button className='btn rounded-full text-[#176AE5] bg-[#e7eefa] text-sm font-medium'>{experience}+ experience</button>
    </div>
<div className='border-dashed border-b-1 pb-5 border-gray-300'>
    
<h2 className="card-title mb-1">{name}</h2>
    <p className='text-gray-500'>{education}</p>
</div>

    <p className='text-gray-600 mt-1'>&reg; Reg No: {registration_number}</p>
    <Link to={`/doctorDetails/${id}`}>
    <div className="card-actions justify-end">
      <button className="btn grow rounded-full text-[#176AE5] bg-[#e7eefa] mt-2">View Details</button>
    </div>
    </Link>
  </div>
</div>

        </div>
    );
};

export default Doctor;
