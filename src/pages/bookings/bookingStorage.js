 const getBookedDoctors = () => {
    return JSON.parse(localStorage.getItem('bookedDoctors')) || [];
  };
  
  const addBookedDoctor = (doctor) => {
    const booked = getBookedDoctors();
    booked.push(doctor);
    localStorage.setItem('bookedDoctors', JSON.stringify(booked));
  };

  export {getBookedDoctors, addBookedDoctor}