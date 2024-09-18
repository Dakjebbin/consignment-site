import React, { useState, useEffect } from 'react' //eslint-disable-line
import './list.css'

const List = () => {
  const [list, setList] = useState([]);

  // Fetch the list of shipments
  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/shipments');
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error('Error fetching shipment list:', error);
    }
  };

  // Use useEffect to fetch list when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container">
      <h1>Shipment Tracking IDs</h1>
      <ul className="shipment-list">
        {list.length > 0 ? (
          list.map((shipment, index) => (
            <li key={shipment.id || shipment.trackingCode || index} className="shipment-item">
              {shipment.trackingCode}
            </li>
          ))
        ) : (
          <p>No shipments available.</p>
        )}
      </ul>
    </div>
  );
};

export default List;
