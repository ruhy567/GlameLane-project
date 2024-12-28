/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Verify.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            if (response.data.success) {
                // Redirect to my orders page
                navigate("/myorders");
            } else {
                // If the payment verification fails
                navigate("/");
            }
        } catch (err) {
            // Handle error from API call
            setError('There was an error verifying the payment. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (success && orderId) {
            verifyPayment();
        } else {
            setLoading(false);
            setError('Invalid payment details.');
        }
    }, [success, orderId]);

    return (
        <div className='verify'>
            {loading ? (
                <div className="spinner">Verifying Payment...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="success">Payment Verified! Redirecting...</div>
            )}
        </div>
    );
};

export default Verify;
