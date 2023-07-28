import React from 'react'
import { useNavigate } from 'react-router-dom'


function Homepage() {
  const navigate = useNavigate();
  const gotoproduct=()=>
  {
    navigate(`/Product/`)
  }
  return (
    <div>
      <button onClick={gotoproduct}>Shop now</button>
      
    </div>
  )
}

export default Homepage

