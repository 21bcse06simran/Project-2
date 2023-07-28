import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'
import MainComponent from '../Maincomponent'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <MainComponent/>
        <Signup/>
        <Connect/>
        
      </div>
  )
}

export default Homepage
