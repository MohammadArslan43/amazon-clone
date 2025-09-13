import React from 'react'
import'./homescreen.css';
import Homebanner from './Homebanner/homebanner';
import Homedetails from '../Homedetails/homedetails';

const homescreen = () => {
  return (
    <div className='homescreen'>
      <Homebanner/>
      <Homedetails/>
      
    </div>
  )
}

export default homescreen
