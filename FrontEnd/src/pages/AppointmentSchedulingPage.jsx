import React from 'react';
import DoctorSchedule from '../components/DoctorSchedule'; // Import the DoctorSchedule component
import './AppointmentSchedulingPage.css'; // Import the corresponding CSS file

const AppointmentSchedulingPage = () => {
  return (
    <div className="appointment-scheduling-page">
      {/* <h2>Appointment Scheduling</h2> */}
      <DoctorSchedule /> {/* Render the DoctorSchedule component */}
    </div>
  );
};

export default AppointmentSchedulingPage;
