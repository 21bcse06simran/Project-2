// Card.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={props.img1} className="card-img" alt="..." />
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4 className="product-title">{props.product}</h4>
          </li>
          <li className="list-group-item">
            <h5 className="CardF">{props.mrp}</h5>
          </li>
          <li className="list-group-item">
            <h5 className="CardF">{props.color}</h5>
          </li>
        </ul>
        {/* "Buy Now" button with a link to the product details page */}
        <Link to={`/productdetails/${props.cardKey}`}>
          <button className="buy-now-button">Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
