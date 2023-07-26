import React, { useState } from 'react'
import "./Paymentform.css"
import Card from '../Card/Card';

function Paymentform() {
    const [Cardno,setCardno]=useState("");
    const [holder,setHolder]=useState("");
    const [expiry,setExpiry]=useState("");
    const [cvv,setCvv]=useState("");
    const submitDetail=()=>
    {
        const detail=
        {
            Cardno:Cardno,
           holder:holder,
            expiry:expiry,
            cvv:cvv

        }
        


        fetch("http://localhost:8081/address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(detail),
        })
        .then((res) => res.json())
        .then((detail) => {
            console.log(detail)
          alert("Saved successfully!!");
          // Assuming 'detail' is an array received from the server, update 'arr' state with it
          setArr(detail);
        });
      };

  return (
    <div>
         <div className="container"> 
      <h2>Payment Details</h2>
      
        Accepted Cards<br/>
        <img src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" alt="error" width="60"/>
        <img src =" https://www.rupay.co.in/images/rupay/cards-img/debit-pmjdy-mobile.png"alt="error" width="60"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUWlYysKFWMks0_Z1dkNkEDfdjSkJ5Cld5w&usqp=CAU" alt="error" width="60"/>
        <br/><br/>
        <label for="card-number">Card Number</label>
        <input
          type="text"
          id="card-number"
          placeholder="Enter your card number"
          maxlength="16"
          value={Cardno} onChange={(e)=>setCardno(e.target.value)}
          required
        />

        <label for="card-holder">Card Holder</label>
        <input
          type="text"
          id="card-holder"
          placeholder="Enter the card holder's name"
          value={holder} onChange={(e)=>setHolder(e.target.value)}
          required
        />

        <div  id="sss">
          <div >
            <label for="expiry-date">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              maxlength="5"
              value={expiry} onChange={(e)=>setExpiry(e.target.value)}
              required
            />
          </div>
          <div >
            <label for="cvv">CVV</label>
            <input
              type="number"
              id="cvv"
              placeholder="CVV"
              maxlength="3"
              value={cvv} onChange={(e)=>setCvv(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="button" className="btn btn-dark" onClick={submitDetail}>Processed to payment</button>
      
    </div>
      
    </div>
  )
}

export default Paymentform
