import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 





export default function Highman() {
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
      <div className='col me-5% pd-5%'>
        <h1>HIGHLIGHTS</h1>
        <h2>MAN | WOMAN</h2>
        <button type="button"className="btn btn-dark">SHOP NOW</button>
        </div>
      <div className='col text-center'>
      <Carousel autoPlaySpeed={1000} responsive={responsive}>
          <div className="card">
            <img className="product--img"src="./img/img38.webp" alt="" />
            <p>WHITE</p>
            <p>T-DIEGOR-IND White Man Slim T-shirt</p>
            MRP  ₹9,999.00   
            <p><span data-v-e4caeaf8="">₹5,999.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img37.webp" alt="" />
            <p>YELLOW</p>
            <p>T-JUST-DOVAL-PJ REGULAR PATCH YELLOW T-SHIRTS</p>
            MRP ₹6,999.00 
            <p><span data-v-e4caeaf8="">₹4,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img36.webp" alt="" />
            <p>BLACK</p>
            <p>T-SMITH-MON SLIM MEN BLACK POLO</p>
            MRP ₹16,999.00 
            <p><span data-v-e4caeaf8="">₹8,499.00 (50% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img28.webp" alt="" />
            <p>Black</p>
            <p>1995 STRAIGHT FIT MAN BLUE MEDIUM WASHED JEANS</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div><div className="card">
            <img className="product--img"src="./img/img29.webp" alt="" />
            <p>Blue</p>
            <p>D-UM-RIB-NE LOOSE MEN BLUE SWEATERS</p>
            MRP ₹36,999.00 
            <p><span data-v-e4caeaf8="">₹22,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img30.webp" alt="" />
            <p>BLACK</p>
            <p>D-UM-RIB-NE LOOSE MEN BLACK SWEATERS</p>
            MRP ₹36,999.00
            <p><span data-v-e4caeaf8="">₹22,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img31.webp" alt="" />
            <p>BLACK</p>
            <p>D-MARTIANS STRAIGHT FIT MAN BLACK MEDIUM WASHED JOGGJEANS®</p>
            MRP ₹32,999.00
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img32.webp" alt="" />
            <p>Blue</p>
            <p>D-SIMPLY REGULAR MEN BLUE SHIRT</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹19,799.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img33.webp" alt="" />
            <p>BLUE</p>
            <p>D-SIMPLY-OVER REGULAR MEN BLUE SHIRT</p>
            MRP ₹34,999.00
            <p><span data-v-e4caeaf8="">₹20,999.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img34.webp" alt="" />
            <p>BLUE</p>
            <p>D-MAND-FS STRAIGHT FIT MAN BLUE MEDIUM WASHED JEANS</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img35.webp" alt="" />
            <p>BLUE</p>
            <p>HIRESH S.II MEN BLUE WALLET</p>
            MRP ₹16,999.00 
            <p><span data-v-e4caeaf8=""> ₹8,499.00 (50% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img39.webp" alt="" />
            <p>RED</p>
            <p>T-SMITH-DIV SLIM RED MAN POLO</p>
            MRP 
            <p><span data-v-e4caeaf8="">₹9,999.00</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img38.webp" alt="" />
            <p>WHITE</p>
            <p>T-DIEGOR-IND White Man Slim T-shirt</p>
            MRP  ₹9,999.00   
            <p><span data-v-e4caeaf8="">₹5,999.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img37.webp" alt="" />
            <p>YELLOW</p>
            <p>T-JUST-DOVAL-PJ REGULAR PATCH YELLOW T-SHIRTS</p>
            MRP ₹6,999.00 
            <p><span data-v-e4caeaf8="">₹4,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img36.webp" alt="" />
            <p>BLACK</p>
            <p>T-SMITH-MON SLIM MEN BLACK POLO</p>
            MRP ₹16,999.00 
            <p><span data-v-e4caeaf8="">₹8,499.00 (50% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img28.webp" alt="" />
            <p>Black</p>
            <p>1995 STRAIGHT FIT MAN BLUE MEDIUM WASHED JEANS</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div><div className="card">
            <img className="product--img"src="./img/img29.webp" alt="" />
            <p>Blue</p>
            <p>D-UM-RIB-NE LOOSE MEN BLUE SWEATERS</p>
            MRP ₹36,999.00 
            <p><span data-v-e4caeaf8="">₹22,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img30.webp" alt="" />
            <p>BLACK</p>
            <p>D-UM-RIB-NE LOOSE MEN BLACK SWEATERS</p>
            MRP ₹36,999.00
            <p><span data-v-e4caeaf8="">₹22,199.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img31.webp" alt="" />
            <p>BLACK</p>
            <p>D-MARTIANS STRAIGHT FIT MAN BLACK MEDIUM WASHED JOGGJEANS®</p>
            MRP ₹32,999.00
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img32.webp" alt="" />
            <p>Blue</p>
            <p>D-SIMPLY REGULAR MEN BLUE SHIRT</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹19,799.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img33.webp" alt="" />
            <p>BLUE</p>
            <p>D-SIMPLY-OVER REGULAR MEN BLUE SHIRT</p>
            MRP ₹34,999.00
            <p><span data-v-e4caeaf8="">₹20,999.00 (40% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img34.webp" alt="" />
            <p>BLUE</p>
            <p>D-MAND-FS STRAIGHT FIT MAN BLUE MEDIUM WASHED JEANS</p>
            MRP ₹32,999.00 
            <p><span data-v-e4caeaf8="">₹23,099.00 (30% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img35.webp" alt="" />
            <p>BLUE</p>
            <p>HIRESH S.II MEN BLUE WALLET</p>
            MRP ₹16,999.00 
            <p><span data-v-e4caeaf8=""> ₹8,499.00 (50% OFF)</span></p>     
          </div>
          <div className="card">
            <img className="product--img"src="./img/img39.webp" alt="" />
            <p>RED</p>
            <p>T-SMITH-DIV SLIM RED MAN POLO</p>
            MRP 
            <p><span data-v-e4caeaf8="">₹9,999.00</span></p>     
          </div>
        </Carousel>
      </div>
    </div>
    </div>
  )
}