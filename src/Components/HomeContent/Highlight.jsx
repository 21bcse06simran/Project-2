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
            <img className="product--img"src="./img/img22.webp" alt="" />
            <h5> <p>WOMENS JEANS</p></h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img23.webp" alt="" />
           <h5> <p>MENS BELTS</p></h5>    
          </div>
          <div className="card">
            <img className="product--img"src="./img/img24.webp" alt="" />
            <h5>
                <p>MENS TOPWEAR</p>
            </h5>   
          </div>
          <div className="card">
            <img className="product--img"src="./img/img25.webp" alt="" />
            <h5>
               <p>MENS SNEAKERS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img26.webp" alt="" />
            <h5>
                <p>WOMANS BAGS</p>
            </h5>
          </div><div className="card">
            <img className="product--img"src="./img/img27.webp" alt="" />
            <h5>
                 <p>MENS JEANS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img22.webp" alt="" />
            <h5> <p>WOMENS JEANS</p></h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img23.webp" alt="" />
           <h5> <p>MENS BELTS</p></h5>    
          </div>
          <div className="card">
            <img className="product--img"src="./img/img24.webp" alt="" />
            <h5>
                <p>MENS TOPWEAR</p>
            </h5>   
          </div>
          <div className="card">
            <img className="product--img"src="./img/img25.webp" alt="" />
            <h5>
                    <p>MENS SNEAKERS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img26.webp" alt="" />
            <h5>
                    <p>WOMANS BAGS</p>
            </h5>
          </div><div className="card">
            <img className="product--img"src="./img/img27.webp" alt="" />
            <h5>
                    <p>MENS JEANS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img22.webp" alt="" />
            <h5> <p>WOMENS JEANS</p></h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img23.webp" alt="" />
           <h5> <p>MENS BELTS</p></h5>    
          </div>
          <div className="card">
            <img className="product--img"src="./img/img24.webp" alt="" />
            <h5>
                <p>MENS TOPWEAR</p>
            </h5>   
          </div>
          <div className="card">
            <img className="product--img"src="./img/img25.webp" alt="" />
            <h5>
               <p>MENS SNEAKERS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img26.webp" alt="" />
            <h5>
                <p>WOMANS BAGS</p>
            </h5>
          </div><div className="card">
            <img className="product--img"src="./img/img27.webp" alt="" />
            <h5>
                 <p>MENS JEANS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img22.webp" alt="" />
            <h5> <p>WOMENS JEANS</p></h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img23.webp" alt="" />
           <h5> <p>MENS BELTS</p></h5>    
          </div>
          <div className="card">
            <img className="product--img"src="./img/img24.webp" alt="" />
            <h5>
                <p>MENS TOPWEAR</p>
            </h5>   
          </div>
          <div className="card">
            <img className="product--img"src="./img/img25.webp" alt="" />
            <h5>
                    <p>MENS SNEAKERS</p>
            </h5>
          </div>
          <div className="card">
            <img className="product--img"src="./img/img26.webp" alt="" />
            <h5>
                    <p>WOMANS BAGS</p>
            </h5>
          </div><div className="card">
            <img className="product--img"src="./img/img27.webp" alt="" />
            <h5>
                    <p>MENS JEANS</p>
            </h5>
          </div>
        </Carousel>
      </div>
    </div>
    </div>
  )
}
