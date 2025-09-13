import React from 'react'
import Navbarbelt from './navbar/navbarbelt/navbarbelt'
import Navbarbanner from './navbar/navbarbanner/navbarbanner'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Navbarbelt/>
      <Navbarbanner/>
    </div>
  )
}

export default Navbar
