import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/DoctorSchedule.css'; // Import the custom CSS file

const DoctorSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');

  // Dummy data with availability status
  const doctors = [
    { id: 1, name: 'Dr. Smith', availability: { '2024-09-15': 'available', '2024-09-16': 'occupied' } },
    { id: 2, name: 'Dr. Johnson', availability: { '2024-09-15': 'on leave' } },
  ];

  const selectedDoctorData = doctors.find(doc => doc.name === selectedDoctor);
  const doctorAvailability = selectedDoctorData ? selectedDoctorData.availability : {};

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleBookAppointment = () => {
    if (selectedDoctor && appointmentDetails) {
      const appointmentDate = date.toDateString();
      setAppointments([...appointments, { doctor: selectedDoctor, date: appointmentDate, details: appointmentDetails }]);
      alert('Appointment booked successfully!');
      setSelectedDoctor('');
      setAppointmentDetails('');
    } else {
      alert('Please select a doctor and provide details.');
    }
  };

  const tileClassName = ({ date }) => {
    const dateString = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    if (appointments.find(app => app.date === date.toDateString())) {
      return 'calendar-tile booked'; // Color for booked appointments
    }
    const status = doctorAvailability[dateString];
    return status ? `calendar-tile ${status}` : null;
  };

  return (
    <div className="doctor-schedule-container">
      <h2>Doctor Availability and Scheduling</h2>

      {/* Doctor Selection */}
      <div className="doctor-selection">
        <label htmlFor="doctor">Select Doctor:</label>
        <select
          id="doctor"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar for Date Selection */}
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={tileClassName}
          minDate={new Date()}
        />
      </div>

      {/* Appointment Details */}
      <div className="appointment-details">
        <textarea
          placeholder="Enter appointment details"
          value={appointmentDetails}
          onChange={(e) => setAppointmentDetails(e.target.value)}
        />
        <button onClick={handleBookAppointment} className="book-button">
          Book Appointment
        </button>
      </div>

      {/* Display Appointments */}
      <div className="appointments-list">
        <h3>Scheduled Appointments</h3>
        <ul>
          {appointments.length > 0 ? (
            appointments.map((app, index) => (
              <li key={index}>
                {app.doctor} - {app.date} - {app.details}
              </li>
            ))
          ) : (
            <li>No appointments scheduled.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorSchedule;
