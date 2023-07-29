import React from 'react'
import HomeContect from '../../Components/HomeContent/HomeContect'
//import Navbar from '../../Components/Navbar/Navbar'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'

function Homepage() {
  return (
    <div>
      {/*<Navbar/>*/}
      <HomeContect/>
      <Signup/>
      <Connect/>
    </div>
  )
}

export default Homepage

