import React from 'react';
import './Success.css';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Signup from '../../Components/Signup/Signup';
import Connect from '../../Components/Connect/Connect';

function OrderPlaced() {
    const {id} = useParams();
  return (
    <div className="order-placed-container">
        <Navbar/>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your purchase.</p>
      <p>Your order id is #{id}</p>
      <p>We will process and deliver your order soon.</p>
      <Signup/>
      <Connect/>
      
    </div>
    
  );
}

export default OrderPlaced;
