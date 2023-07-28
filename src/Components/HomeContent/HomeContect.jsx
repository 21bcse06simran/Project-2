import React from 'react'
import './HomeContent.css'
import 'react-multi-carousel/lib/styles.css';
import Carouselimg from './Carouselimg/Carouselimg';
import './HomeContent.css';
import Highlight from './Highlight/Highlight';
import Highman from './Highman/Highman';
//import Product from './Product/Product';
import { useNavigate } from 'react-router-dom';



function HomeContect() {
    const gotoproduct=()=>
  {
    navigate(`/Product/`)
  }
    const navigate = useNavigate();
  return (
    <>
        <div>
        <div className="card text-bg-dark">
        <img src="./img/img1.webp" className="card-img" alt="error"/>
            <div className="card-img-overlay">
                
                <a style={{margin:'.50rem' , color:'white' , backgroundColor:'red' , border:'red'} } className="btn btn-primary" href="/" role="button" onClick={gotoproduct}>SHOP WOMAN</a>
            </div>
        </div>

        <div className="card text-center mb-3">
        <div className="card-body">
            <h1 className="card-title">FIND YOUR FIT</h1>
            <h2>MAN | WOMAN</h2>
            <p className="card-text">Find your next denim amoung a wide range of timeless denim washes, icon of low impact style,better for people and the planet.</p>
        </div>
        </div>

        < div className="photo1">
            <div>
                <img src="./img/img3.webp" className="card-img-top" alt="error1"/>
                <h5>
                    <p>TAPERED</p>
                </h5>
            </div>
            <div>
                <img src="./img/img8.webp" className="card-img-top" alt="error1"/>
                <h5>
                    <p>STRAIGHT</p>
                </h5>
            </div>
            <div>
                <img src="./img/img9.webp" className="card-img-top" alt="error1"/>
                <h5>
                    <p>SLIM</p>
                </h5>
            </div>
            <div>
                <img src="./img/img10.webp" className="card-img-top" alt="error1"/>
                <h5>
                    <p>SKINNY</p>
                </h5>
            </div>
            <div>
                <img src="./img/img11.webp" className="card-img-top" alt="error1"/>
                <h5>
                    <p>BOOTCUT</p>
                </h5>
            </div>
            </div>
        </div>

   <Carouselimg/>
    <Highlight/>
    <Highman/>

      <div className='photo'>
            <img style={{margin:"10px", marginRight:"10%"}} src="./img/img4.webp" className="card-img-top" alt="error1"/> 
            <img style={{margin:"10px", marginLeft:"7%"}} src="./img/img5.webp" className="card-img-top" alt="error1"/> 
            <img style={{margin:"10px",marginRight:"10%"}} src="./img/img6.webp" className="card-img-top" alt="error1"/> 
            <img style={{margin:"10px", marginLeft:"7%"}} src="./img/img7.webp" className="card-img-top" alt="error1"/> 
        </div>
        

        <span className='logo'>
            <div className="row home-benefits-section mx-0">
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/contact-us"> <img src="https://dibackend.dieselindia.com//cms_images/1671614479icons-01.webp" alt="img"/> </a>
                <h3><a href="https://www.dieselindia.com/cms/contact-us">Personalised Styling</a></h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/legal-area/?for=return-policy"><img src="https://dibackend.dieselindia.com//cms_images/1671614498icons-02.webp" alt="img"/> </a>
                <h3><a href="https://www.dieselindia.com/cms/legal-area/?for=return-policy">30 Day FREE RETURN</a></h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/terms-of-conditions"><img src="https://dibackend.dieselindia.com//cms_images/1671614517icons-03.webp" alt="img"/></a>
                <h3><a href="https://www.dieselindia.com/cms/terms-of-conditions">Authentic Products</a></h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/fees-and-payments-policy"><img src="https://dibackend.dieselindia.com//cms_images/1671614563icons-04.webp" alt="img"/></a>
                <h3><a href="https://www.dieselindia.com/cms/fees-and-payments-policy">Flexible &amp; Secure Payments</a></h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/contact-us"><img src="https://dibackend.dieselindia.com//cms_images/1671614575icons-05.webp" alt="img"/></a>
                <h3><a href="https://www.dieselindia.com/cms/contact-us">Lifetime Support</a></h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><img src="https://dibackend.dieselindia.com//cms_images/1671614585icons-06.webp" alt="img"/>
                <h3>Pre - order</h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><img src="https://dibackend.dieselindia.com//cms_images/1671614595icons-07.webp" alt="img"/>
                <h3>Exclusive Offers</h3>
                </div>
                </div>
                <div className="col-md-3 benefits-section-col">
                <div className="benefits-section-div"><a href="https://www.dieselindia.com/cms/legal-area/?for=delivery-and-shipping-policy"><img src="https://dibackend.dieselindia.com//cms_images/1671614606icons-08.webp" alt="img"/></a>
                <h3><a href="https://www.dieselindia.com/cms/legal-area/?for=delivery-and-shipping-policy">Free Shipping</a></h3>
                </div>
           </div>
        </div>
    </span>

    <div className="card text-bg-dark1">
        <img src="./img/img2.webp" className="card-img" alt="error"/>
     </div>
    </>
  )
}