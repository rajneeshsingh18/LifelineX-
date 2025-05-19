import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddPatient from "./components/AddPatient";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/navbar";
import PatientList from "./components/PatientList";
import AppointmentSchedulingPage from "./pages/AppointmentSchedulingPage";
import BedAvailabilityPage from "./pages/BedAvailabilityPage";
import MedicineInventoryPage from "./pages/MedicineInventoryPage";
import QueueStatusPage from "./pages/QueueStatusPage";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/addpatients" element={<AddPatient />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/bed-availability" element={<BedAvailabilityPage />} />
        <Route path="/queue-status" element={<QueueStatusPage />} />
        <Route path="/appointments" element={<AppointmentSchedulingPage />} />
        <Route path="/medicine-inventory" element={<MedicineInventoryPage />} />
        {/* Uncomment these lines if you have these pages */}
        {/* <Route path="/health-records" element={<HealthRecordsPage />} /> */}
        {/* <Route path="/remote-consultation" element={<RemoteConsultationPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
