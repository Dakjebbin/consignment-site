import React, { useState } from 'react'; //eslint-disable-line
import './back.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const Back = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const navigate = useNavigate();  // Initialize navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!trackingCode) {
      toast.error('Please enter a tracking code.');
      return;
    }

    try {
      const response = await fetch(`https://consignment-site-backend.vercel.app/api/shipments/${trackingCode}`);
      const data = await response.json();

      if (response.ok) {
        toast.success('Tracking code found!');
        // Redirect to the details page with the trackingCode as a URL parameter
        navigate(`/details/${trackingCode}`);
        setTrackingCode('');
      } else {
        toast.error(data.message || 'Tracking code not found');
        setTrackingCode('');
      }
    } catch (err) {
      toast.error('An error occurred while verifying the tracking code. Please try again.');
      setTrackingCode('')
    }

   
  };

  return (
    <div className='background'>
      <div className='background-content'>
        <span>
          <h2>
            Welcome to <br /> LogiTech Solutions
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

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Back;
