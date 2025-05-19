
import React, { useState } from 'react';
import '../components/PatientHealthRecord.css';

const PatientHealthRecord = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [visitHistory, setVisitHistory] = useState([
    'Annual Checkup - June 2023',
    'Emergency Visit - January 2024'
  ]);
  const [prescriptions, setPrescriptions] = useState([
    'Medication A - 30 days',
    'Medication B - 14 days'
  ]);
  const [file, setFile] = useState(null);
  const [newVisit, setNewVisit] = useState('');
  const [newPrescription, setNewPrescription] = useState('');

  const handleFileUpload = (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      setUploadedFiles([...uploadedFiles, newFile]);
    }
  };

  const handleSubmitFile = () => {
    if (file) {
      // Simulate file upload
      alert(`File ${file.name} uploaded successfully!`);
      setFile(null);
    } else {
      alert('Please select a file to upload.');
    }
  };

  const handleAddVisit = () => {
    if (newVisit) {
      setVisitHistory([...visitHistory, newVisit]);
      setNewVisit('');
    } else {
      alert('Please enter visit details.');
    }
  };

  const handleAddPrescription = () => {
    if (newPrescription) {
      setPrescriptions([...prescriptions, newPrescription]);
      setNewPrescription('');
    } else {
      alert('Please enter prescription details.');
    }
  };

  return (
    <div className="patient-health-record-container">
      <h2>Patient Health Records</h2>

      {/* File Upload Section */}
      <div className="file-upload">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleSubmitFile} className="upload-button">
          Upload Record
        </button>
      </div>

      {/* Uploaded Files Section */}
      <div className="uploaded-files">
        <h3>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>

      {/* Visit History Section */}
      <div className="visit-history">
        <h3>Previous Visit History</h3>
        <ul>
          {visitHistory.length > 0 ? (
            visitHistory.map((visit, index) => (
              <li key={index}>{visit}</li>
            ))
          ) : (
            <li>No visit history available.</li>
          )}
        </ul>
        <input
          type="text"
          value={newVisit}
          onChange={(e) => setNewVisit(e.target.value)}
          placeholder="Add new visit"
        />
        <button onClick={handleAddVisit} className="add-button">
          Add Visit
        </button>
      </div>

      {/* Prescriptions Section */}
      <div className="prescriptions">
        <h3>Prescriptions</h3>
        <ul>
          {prescriptions.length > 0 ? (
            prescriptions.map((prescription, index) => (
              <li key={index}>{prescription}</li>
            ))
          ) : (
            <li>No prescriptions available.</li>
          )}
        </ul>
        <input
          type="text"
          value={newPrescription}
          onChange={(e) => setNewPrescription(e.target.value)}
          placeholder="Add new prescription"
        />
        <button onClick={handleAddPrescription} className="add-button">
          Add Prescription
        </button>
      </div>
    </div>
  );
};

export default PatientHealthRecord;
