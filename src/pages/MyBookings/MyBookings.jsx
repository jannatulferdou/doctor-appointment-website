import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DocFee from '../DocFee/DocFee';
import { Link } from 'react-router';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#8884d8', '#82ca9d', '#ffc658', '#a4de6c', '#d0ed57', '#ffc0cb'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [chartData, setChartData] = useState([]);
  const [hasAppointments, setHasAppointments] = useState(false);

  useEffect(() => {
    const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
    setHasAppointments(bookedDoctors.length > 0);

    const formattedDoctorData = bookedDoctors.map(doctor => ({
      name: doctor.name,
      fee: parseInt(doctor.fee) || 0,
      speciality: doctor.speciality
    }));

    setChartData(formattedDoctorData);
  }, []);

  const updateChartData = (doctors) => {
    setHasAppointments(doctors.length > 0);
    const formattedData = doctors.map(doctor => ({
      name: doctor.name,
      fee: parseInt(doctor.fee) || 0,
      speciality: doctor.speciality
    }));
    setChartData(formattedData);
  };

  if (!hasAppointments) {
    return (
      <div className="text-center mb-20">
        <div className="bg-white p-8 rounded-lg shadow p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">You Have Not Book Any Appointment Yet</h2>
          <p className="text-gray-500 text-lg mb-5">Our platform connects you with experienced doctors across various specialties - all at your convenience </p>
          
          <Link to='/'><button className='btn bg-[#176AE5] text-white'>Book an Appointment</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
          Doctor Consultation Fees
        </h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={70} 
                tick={{ fontSize: 12 }}
              />
              <YAxis label={{ value: 'Fee (BDT)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value) => [`${value} BDT`, 'Fee']}
                labelFormatter={(name) => {
                  const doctor = chartData.find(d => d.name === name);
                  return `${name} (${doctor?.speciality || 'N/A'})`;
                }}
              />
              <Bar 
                dataKey="fee" 
                name="Consultation Fee"                               
                shape={<TriangleBar />} 
                label={{ position: 'top', formatter: (value) => `${value} BDT` }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="">
        <DocFee resetDocChart={updateChartData} ></DocFee>
      </div>
    </div>
  );
};

export default MyBookings;