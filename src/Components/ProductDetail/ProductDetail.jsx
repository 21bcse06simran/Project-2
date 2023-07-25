import React from 'react'
import "./ProductDetail.css"

function ProductDetail() {
    return (
        <div>
            <div className='Contant'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372767005/665/410372767005_1_3515.webp" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372767005/665/410372767005_2_4957.webp" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410372767005/665/410372767005_4_3030.webp" class="d-block w-100" alt="..."/>
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
            <h3>product name</h3>
            <h5 className='Pline'>mrp</h5>
            <h6 className='Pline'>price inclusive all texes</h6>
            <h5 className='Pline'>color</h5>
            
        
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
            <button className="btn btn-dark" type="button" >Add to Cart</button>
            
            </div>
            <div className='dropdown'>
            <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Left-aligned, right-aligned lg
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Left-aligned, right-aligned lg
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Left-aligned, right-aligned lg
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn- dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Left-aligned, right-aligned lg
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
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
