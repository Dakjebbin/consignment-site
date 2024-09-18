import React, { useState } from 'react'; //eslint-disable-line
import './back.css';

const Back = () => {

  const TrackShipment = () => {
    const [trackingCode, setTrackingCode] = useState('');
    const [trackingDetails, setTrackingDetails] = useState(null);
    const [error, setError] = useState('');

    //function to handle tracking code submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      if (!trackingCode) {
        alert('Please Enter Tracking Code');
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/api/shipments/${trackingCode}`);
        const data = await response.json(); 

        if (response.ok) {
          setTrackingDetails(data);

          // Display shipment status in an alert pop-up
          alert(`Shipment Status: ${data.status}`);
        } else {
          // Display tracking code not found as a pop-up alert
          alert(data.message || 'Tracking code not found');
        }
      } catch (err) {
        // Display error message as a pop-up alert
        alert('An error occurred while verifying the tracking code. Please try again.');
      }
    };

    return (
      <div className='background'>
        <div className='background-content'>
          <span>
            <h2>
              Welcome to <br /> SwiftShip Logistics
            </h2>
          </span>
          <form className='home-form' onSubmit={handleSubmit}>
            <span>
              <input 
                className='track' 
                type="text" 
                placeholder='Your Tracking Id' 
                value={trackingCode} 
                onChange={(e) => setTrackingCode(e.target.value)} 
              />
              <button type='submit' className='track-button'>TRACK</button>
            </span>
          </form>
        </div>

        {/* The alerts will handle displaying errors and status, so no need for <p> */}
      </div>
    );
  };

  return <TrackShipment />;
};

export default Back;
