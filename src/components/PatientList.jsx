// src/components/PatientsList.js
import { useEffect, useState } from "react";
import axios from "axios";
import "./PatientList.css";

const PatientsList = () => {
  const [patients, setPatients] = useState([]); // State to hold patient data

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchPatients = async () => {
      try {
        console.log("Fetching patients data...");
        // Make a GET request to the backend API
        const res = await axios.get("http://localhost:5000/api/patients");
        console.log("Response received:", res);
        setPatients(res.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching patients data:", err);
      }
    };

    fetchPatients(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array to run only on component mount

  return (
    <div>
      <h1>Patients List</h1>
      {patients.length > 0 ? (
        patients.map((patient) => (
          <div key={patient._id} className="patientProfile">
            <div className="svgContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#81DAE3"
                color="#295F98"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "24px", height: "24px" }} // Inline styles for size
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>
                {patient.name} - {patient.age} - {patient.priorityCategory}
              </p>
              <p>Symptoms: {patient.symptoms}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
};

export default PatientsList;
