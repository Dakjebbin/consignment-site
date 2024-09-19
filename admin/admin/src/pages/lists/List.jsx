import React, { useState, useEffect } from 'react'; //eslint-disable-line
import './list.css';
import { toast, ToastContainer } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
  const [list, setList] = useState([]);

  // Fetch the list of shipments
  const fetchList = async () => {
    try {
      const response = await fetch('https://consignment-site-backend.vercel.app/api/shipments');
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error('Error fetching shipment list:', error);
      toast.error('Error fetching shipment list.');
    }
  };

  // Remove shipment function
  const removeShipment = async (shipmentId) => {
    try {
      const response = await fetch(`https://consignment-site-backend.vercel.app/api/shipments/${shipmentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Shipment removed successfully.');
        fetchList(); // Refresh list after deletion
      } else {
        toast.error('Failed to remove shipment.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the shipment.');
      console.error('Error removing shipment:', error);
    }
  };

  // Use useEffect to fetch list when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container flex-col">
      <p>All Shipment Tracking IDs and Statuses</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Tracking ID</b>
          <b>Status</b>
        </div>

        {/* Render the list of shipments */}
        <ul className="shipment-list">
          {list.length > 0 ? (
            list.map((shipment, index) => (
              <li key={shipment._id} className="shipment-item">
                <div className="list-table-format">
                  <span>{shipment.trackingCode}</span>
                  <span>{shipment.status}</span>
                  <p onClick={() => removeShipment(shipment._id)} className="delete-button">
                    x
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p>No shipments available.</p>
          )}
        </ul>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default List;
