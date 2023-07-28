import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 





export default function Carouselimg() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };
  return (
    
    <div className='container'>
      <div className="row">
      <div className='col'>
        <h1>SALE PICKS</h1>
        <h2>MAN | WOMAN</h2>
        <button type="button"className="btn btn-dark">SHOP NOW</button>
      </div>
      <div className='col text-center'>
      <Carousel autoPlaySpeed={1000} responsive={responsive}>
          <div className="card">
            <img className="product--img"src="./img/img16.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP  ₹24,999.00       
            <p><span data-v-e4caeaf8="">₹17,499.00 (30% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img14.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP 
            <p><span data-v-e4caeaf8="">₹36,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img13.webp" alt="" />
            <p>Green</p>
            <p>2019 D-STRUKT Clean Green Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹24,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img12.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img20.webp" alt="" />
            <p>Black</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹19,999.00</span></p>     
          </div><div className="card">
            <img className="product--img"src="./img/img15.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img3.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img16.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img14.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹36,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img13.webp" alt="" />
            <p>Green</p>
            <p>2019 D-STRUKT Clean Green Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹24,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img12.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img11.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹19,999.00</span></p>     
          </div><div className="card">
            <img className="product--img"src="./img/img15.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img3.webp" alt="" />
            <p>Blue</p>
            <p>2019 D-STRUKT Medium Treated Blue Man Slim Jeans</p>
            MRP
            <p><span data-v-e4caeaf8="">₹17,999.00</span></p>     
          </div>
        </Carousel>
      </div>
    </div>
    </div>
  )
}


