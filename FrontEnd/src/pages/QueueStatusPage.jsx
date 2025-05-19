import React from 'react';
import QueueStatus from '../components/QueueStatus'; // Import the already built component
import './QueueStatusPage.css';

const QueueStatusPage = () => {
  return (
    <div className="queue-status-page">
      {/* <h2>OPD Queue Status</h2> */}
      {/* Include the existing QueueStatus component here */}
      <QueueStatus />
    </div>
  );
};

export default QueueStatusPage;
