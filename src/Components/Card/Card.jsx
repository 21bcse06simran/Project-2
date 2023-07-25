import React from 'react'
import "./Card.css"

function Card(props) {
    return (
      <div>
          <div className="card" style={{ width: '18rem' }}>
          <img src={props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
              <img src="{}" alt="" />
              
          </div>
          <ul className="list-group list-group-flush">
             <li className="list-group-item"><h4>{props.product}</h4></li>
              <li className="list-group-item"><h5 className='CardF'>{props.mrp}</h5></li>
              <li className="list-group-item"><h5 className='CardF'>{props.color}</h5></li>
          </ul>
          
          </div>
        
      </div>
    )
  }
  

export default Card
