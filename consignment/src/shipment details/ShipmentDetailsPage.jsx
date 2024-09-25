import React, { useEffect, useState } from 'react'; //eslint-disable-line
import './ShipmentDetailsPage.css';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../footer/Footer';
import { asset } from '../images/assets';

const ShipmentDetailsPage = () => {
  const { trackingCode } = useParams(); // Get the trackingCode from URL
  const [trackingDetails, setTrackingDetails] = useState(null);

  // Fetch shipment details when component mounts
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://consignment-site-backend.vercel.app/api/shipments/${trackingCode}`);
        const data = await response.json();

        if (response.ok) {
          setTrackingDetails(data);
        } else {
          toast.error(data.message || 'Tracking code not found');
        }
      } catch (error) {
        toast.error('An error occurred while fetching shipment details.');
      }
    };

    fetchDetails();
  }, [trackingCode]); // Only re-fetch if the trackingCode changes

  return (
    <div className="shipment-details-page">
      <div className='container'>
        <h3>SHIPMENT DETAILS</h3>
        {trackingDetails ? (
          <div className='new-design'>
            
              <img className='parcel-icon' src={asset.parcel} alt="" />
           
          <div className='delivery-texts'>
            <p>
          <b>Tracking Code:</b> {trackingDetails.trackingCode}</p></div>
          <div className='delivery-texts'>
          <p>
           <span className='dot'>&#x25cf;</span>
          <b>Status:</b> {trackingDetails.status}</p>
          </div>
         </div>
          
        ) : (
          
      <p style={{textAlign:'center'}}>Loading shipment details... Please Wait</p> 
       
        )}
      </div>

      {/* Toast notifications */}
      <ToastContainer />

      <Footer/>
    </div>
  );
};

export default ShipmentDetailsPage;
