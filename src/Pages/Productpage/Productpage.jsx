import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'

function Productpage() {
  return (
    <div>
        <Navbar/>
        <ProductDetail/>
        <Signup/>
        <Connect/>

      
    </div>
  )
}

export default Productpage
