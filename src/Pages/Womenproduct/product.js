import React from "react";

export default function Product(props) {

  return (
    <>
      <div class="card m-4" style={{ width: "19rem" }}>
        <img class="card-img-top" src={props.image.url} alt="Card image cap" style={{height:"25rem"}}/>
        <div class="card-body">
          <h5 class="card-title">{props.heading}</h5>
          <p class="card-text">{props.price}</p>
          <a href="#" class="btn btn-danger">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}
