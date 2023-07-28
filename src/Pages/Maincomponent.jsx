import React from 'react';
import Card from '../Components/Card/Card'; // Assuming the Card component is in the same directory as the main component
import jsonData from '../data.json'; // Import your JSON data here
import './Maincomponent.css'
function MainComponent() {
  return (
    <div className="card-container">
      {jsonData.product.map((item) => (
        <Card
          key={item.id}
          cardKey={item.id}
          img1={item.img1}
          product={item.product}
          mrp={item.mrp}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default MainComponent;
