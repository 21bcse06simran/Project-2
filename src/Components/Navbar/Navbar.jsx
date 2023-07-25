import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#CC0000' }}>
        <div className="container-fluid">

            <button className="navbar-toggler btn-outline-ligh" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><h6>Home</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/"><h6 className='navh'>Man</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/"><h6 className='navh'>Woman</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="/"><h6 className='navh'>SALE</h6></a>
                </li>
            </ul>

            </div>
            <a className="navbar-brand" href="/"><h1 className='navh'>HiT-Blunders</h1></a>
            <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-outline-light"><img src="https://img.icons8.com/?size=512&id=3686&format=png" alt="" className='icon'/></button>
                <button type="button" className="btn btn-outline-light"><img src="https://img.icons8.com/?size=512&id=b2DXU0pj5jFw&format=png" alt=""className='icon' /></button>
                <button type="button" className="btn btn-outline-light"><img src="https://img.icons8.com/?size=512&id=aDdoo60TCe3D&format=png" alt="" className='icon'/></button>
                </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar