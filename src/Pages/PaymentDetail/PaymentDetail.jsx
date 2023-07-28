import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Signup from '../../Components/Signup/Signup';
import Connect from '../../Components/Connect/Connect';
import Paymentform from '../../Components/Paymentform/Paymentform';

function PaymentDetail() {
  return (
    <div>
        <Navbar/>
        <Paymentform/>
        <Signup/>
        <Connect/>
      </div>
  )
}

export default PaymentDetail
