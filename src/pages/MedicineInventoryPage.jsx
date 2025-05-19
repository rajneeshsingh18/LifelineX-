import React from 'react';
import MedicineInventory from '../components/MedicineInventory'; // Import the MedicineInventory component
import './MedicineInventoryPage.css'; // Import the corresponding CSS file

const MedicineInventoryPage = () => {
  return (
    <div className="medicine-inventory-page">
      {/* <h2>Medicine Inventory</h2> */}
     <MedicineInventory />  {/* Render the MedicineInventory component */}
    </div>
  );
};

export default MedicineInventoryPage;
