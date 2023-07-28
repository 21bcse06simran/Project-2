import React, { useState } from "react";
import "./Login.css";
import jsonData from "../../data.json";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import { useEffect } from "react";
// import { JSON } from 'react-router-dom';

const addtocart = (id, email) => {
  const product = jsonData.product.find((item) => item.id === id);
  if (product) {
    const cartItem = { ...product, quantity: 1, username: email,id: uuidv4(), };
    console.log("want",cartItem)
    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((cartItem) => {
       console.log(cartItem)

      });
  }
};

function Login() {
  const id = useParams().id;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   // Load data from localStorage when the component mounts
  //   const savedData = localStorage.getItem('userdetails');
  //   console.log("saved",savedData)
  //   if (savedData) {
  //     console.log(savedData)
  //     navigate(`/cart/${savedData.email}`);
  //   }
  // },[]);
  const handleRegister = () => {
    // Assuming data.json is imported as jsonData
    // Simulate saving the user data in the users array
    const newUser = {
      email: email,
      password: password,
    };
    // jsonData.users.push(JSON.stringify(newUser));
    console.log("User registered:", newUser);

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((newUser) => {
        // localStorage.setItem('userdetails', newUser);
        // const dd = localStorage.getItem('userdetails')
        // console.log(dd)
        alert("Account created successfully!");
      });

    // also add the product to the cart
    addtocart(id, email);

    // Clear the input fields after registration
    setEmail("");
    setPassword("");
    navigate(`/cart/${email}`);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
