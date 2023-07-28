import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { useNavigate, useParams } from 'react-router-dom'
import jsonData from '../../data.json'; 

function ProductDetail() {
    const props = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    useEffect(() => {
        // Fetch the product information based on the product ID from the URL
        const productId=props.id;
        const selectedProduct = jsonData.product.find((item) => item.id === productId);
        setProduct(selectedProduct);
      }, [props.id]);
    


    const savetocart=()=>
    {
        
        navigate(`/login/${product.id}`)
        
        };
if (!product) {
    return <div>Loading...</div>; // You can show a loading state while fetching the data
  }
    return (

        <div>
            <div className='Contant'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={product.img1} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={product.img2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={product.img3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            <div className='Contant2'>
            <h3>{product.product}</h3>
            <h5 className='Pline'>{product.mrp}</h5>
            <h6 className='Pline'>price inclusive all texes</h6>
            <h5 className='Pline'>{product.color}</h5>
            
        
            <h5 className='Pline'>CHOOSE SIZE</h5>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
            <label className="btn btn-outline-dark" htmlFor="btnradio1">28</label>
    
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label className="btn btn-outline-dark" htmlFor="btnradio2">30</label>
    
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label className="btn btn-outline-dark" htmlFor="btnradio3">32</label>
            
            </div>
            <br />
            <br />
            <form className="row grid  col-6 mx-auto" id='Check'>
           
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden"></label>
                <input type="password" className="form-control" id="inputPassword2" placeholder=""/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-dark mb-3">Check delivery</button>
            </div>
            </form>
            <div className="d-grid  col-6 mx-auto">
            <button className="btn btn-dark" type="button"onClick={savetocart} >Add to Cart</button>
            
            </div>
            <div className='dropdown'>
            <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                DESCRIPTION 
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><p>Regular style with a high waist and straight, elongated leg. The button fly and authentic details lend the jean a 1950s, rock-n-roll vibe.</p></li>
                    
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                FOR RESPONSIBLE LIVING
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><p>Better Cotton: Diesel is a member of the Better Cotton. Better C otton connects people and organizations throughout the cotton sector, from field to store, to promote measurable and continuing improvements for the environment, farming communities and the economies of cotton-producing areas</p></li>
                   
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                CARE INSTRUCTIONS 
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li>Machine wash at 105 °F</li>
                    <li>Do not bleach</li>
                    <li>Low iron</li>
                    <li>Do not dry clean</li>
                    <li>Do not tumble dry</li>
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                RETURN TIME LIMIT
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li>Return Time Limit: Easy 30 days return</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <h2 className='Pline'>You may also like this</h2>
                <div className="card-group">
                <div className="card">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372755002/300/410372755002_1_7988.webp" className="card-img-top" alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">MRP ₹52,999.00</h5>
                    <p className="card-text">COLOR: Gold</p>
                    <p className="card-text">1DR GOLD WOMAN SHOULDER BAG - SIZE M</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372753002/300/410372753002_1_9375.webp" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">MRP ₹52,999.00</h5>
                    <p className="card-text">COLOR: White</p>
                    <p className="card-text">1DR WHITE WOMAN SHOULDER BAG - SIZE M</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372531001/300/410372531001_1_9593.webp" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">MRP ₹49,999.00</h5>
                    <p className="card-text">COLOR: Grey.</p>
                    <p className="card-text">1DR GREY WOMAN SHOULDER BAG - SIZE M</p>
                    </div>
                </div>
                </div>
                
                    
    
          
        </div>
      )
    }
    

export default ProductDetail
