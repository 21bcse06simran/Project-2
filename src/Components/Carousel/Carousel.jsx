import React from 'react'
import "./Carousel.css"

function Carousel() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" id='headc'>
    <div className="carousel-item active">
      <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410372556024/300/410372556024_1_3263.webp" className="d-block w-100" id='c1' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410345197004/300/410345197004_1_3191.webp" className="d-block w-100"id='c2' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410345214004/300/410345214004_1_8356.webp" className="d-block w-100" id='c3' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carousel
