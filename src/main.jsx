import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BedAvailability from './components/BedAvailability';
import App from './App.jsx'
import './index.css'
import QueueStatus from './components/QueueStatus.jsx';
import DoctorSchedule from './components/DoctorSchedule.jsx';
import MedicineInventory from './components/MedicineInventory.jsx';
import PatientHealthRecord from './components/PatientHealthRecord.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <BedAvailability />
    <QueueStatus/>
    <DoctorSchedule/>
    <MedicineInventory/>
    <PatientHealthRecord/> */}
  </StrictMode>,
)
