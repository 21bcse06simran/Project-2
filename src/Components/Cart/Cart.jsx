import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../data.json";
import "./Cart.css";
import Address from "../Address/Address";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const { email } = useParams();
  const [trueaddress, setTrue] = useState(false);
  const [totalCost,setTotalCost] = useState(0);
  const change = () => {
    setTrue(!trueaddress);
  };

  function calculateTotalPrice(mrpArray) {
    const totalCost = mrpArray.reduce((accumulator, currentValue) => {
      // Extract the numeric part from the "MRP ₹..." string
      const mrpValue = parseFloat(currentValue.mrp.split("₹")[1].replace(/,/g, ""));

      // Add the numeric value to the accumulator
      return accumulator + mrpValue;
    }, 0);
    // setTotalCost(totalCost.toFixed(2));
    return totalCost.toFixed(2); // Return the total cost rounded to 2 decimal places
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    const username = email;
    if (username) {
      console.log(username);
      fetch(`http://localhost:8000/cart?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("found", data);
          setCartData(data);
        })
        .catch((error) => console.error("Error fetching cart data:", error));
    }
  };

  useEffect(()=>{
      const cost=calculateTotalPrice(cartData);
      if(cost>0) setTotalCost(cost);
      console.log("total",totalCost)
  },[cartData])

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img1} alt={item.product} className="product-image" />
            <div className="product-details">
              <h3>{item.product}</h3>
              <p>Price: {item.mrp}</p>
              {/* Add more product details here */}
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
      <div className="total-price">
        <p>Total Price: ₹{calculateTotalPrice(cartData)}</p>
      </div>

      <button className="add-address" onClick={change}>
        Add Address
      </button>
      {trueaddress && (
        
        <div className="address">
        <Address items={cartData} totalPrice={totalCost}/>
        </div>
        
        
        )}
    </div>
  );
}

export default Cart;
