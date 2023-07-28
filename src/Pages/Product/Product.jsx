import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'
import MainComponent from '../Maincomponent'

function Product() {
  return (
    <div>
      <div>
        <Navbar/>
        <MainComponent/>
        <Signup/>
        <Connect/>
        
      </div>
      
    </div>
  )
}

export default Product
