import React from "react";
import items from "../../Components/data/womendata.json";
import Product from "./product.js";
import Card from "../../Components/Card/Card";

export default function Womenproduct() {
  return (
    <div className="row bg-danger bg-gradient">
      {items.map(function (data) {
        return (
          <>
            <Product
              key={data.id}
              price={data.price}
              heading={data.heading}
              image={data.image}
            />
            {/* <Card key={data.id} image={data.image.url} product={data.heading} mrp={data.price} color={data.color}/> */}
          </>
        );
      })}
    </div>
  );
}
