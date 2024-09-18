import React, {  useEffect, useState } from 'react'; // eslint-disable-line
import './add.css';


const Add = () => {

    const url = "http://localhost:4000/api/shipments";
    const [trackingCode, setTrackingCode] 
    = useState("");
    const [status, setStatus] = 
    useState("");
    const [shipments, setShipments] = useState([]);

    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        const response = await fetch (url);
        const data = await response.json();
        setShipments(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newShipment = {
            trackingCode,
            status,
        };

        const response = await fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newShipment),
        });

        if(response.ok) {
            setTrackingCode('');
            setStatus('')
        }
    };        
        

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={handleSubmit}>
                <div className='add-tracking-id flex-col'>
                    <p>TrackingId</p>
                    <input 
                        onChange={(e) => setTrackingCode(e.target.value)} 
                        value={trackingCode} 
                        type="text" 
                        placeholder='Tracking code' 
                        required // Add required attribute to ensure the input field is not empty
                    />

                    <input type="text" placeholder='status' value={status} onChange={(e) => setStatus(e.target.value)} required />
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    );
};

export default Add;
