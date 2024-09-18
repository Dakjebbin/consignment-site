import React, { useEffect, useState } from 'react'; // eslint-disable-line
import './add.css';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Add = () => {
    const url = "http://localhost:4000/api/shipments";
    const [trackingCode, setTrackingCode] = useState("");
    const [status, setStatus] = useState("");
    const [shipments, setShipments] = useState([]);

    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setShipments(data);
        } catch (error) {
            toast.error("Failed to fetch shipments.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newShipment = {
            trackingCode,
            status,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newShipment),
            });

            const data = await response.json(); // Parse the response data

            if (response.ok) {
                setTrackingCode('');
                setStatus('');
                toast.success(data.message || "Shipment added successfully."); // Display success message
            } else {
                toast.error(data.message || "Failed to add shipment."); // Display error message
            }
        } catch (error) {
            toast.error("An error occurred.");
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
                        required
                    />
                    <input
                        type="text"
                        placeholder='Status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
            <ToastContainer /> {/* Add ToastContainer to display toasts */}
        </div>
    );
};

export default Add;
