import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

// Auth Pages
import Login from "./auth/Login";
import Register from "./auth/Register";

// Core Components
import AddPatient from "./components/AddPatient";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/navbar";
import PatientList from "./components/PatientList";
import Header from "./components_new/common/Header";

// Feature Pages
import AppointmentSchedulingPage from "./pages/AppointmentSchedulingPage";
import BedAvailabilityPage from "./pages/BedAvailabilityPage";
import MedicineInventoryPage from "./pages/MedicineInventoryPage";
import QueueStatusPage from "./pages/QueueStatusPage";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Router>
        {/* Show Header and Navbar only after authentication (optional enhancement) */}
        <Navbar />
        <Header />

        <main className="p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes (can be wrapped in private route logic later) */}
            <Route path="/home" element={<Dashboard />} />
            <Route path="/addpatients" element={<AddPatient />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/bed-availability" element={<BedAvailabilityPage />} />
            <Route path="/queue-status" element={<QueueStatusPage />} />
            <Route path="/appointments" element={<AppointmentSchedulingPage />} />
            <Route path="/medicine-inventory" element={<MedicineInventoryPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
