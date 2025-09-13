import React from 'react'
import './navbarbanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbarbanner = () => {
  const option=[
{ 'name':'Fresh'}, {'name':'MX PLayer'},{'name':'Sell'},{'name':'Bestsellers'},
{'name':"Today's Deals"},{'name':'Mobiles'},{'name':'Electronics'},{'name':'Prime'},
{'name':'Customer Service'},{'name':'Fashion'},{'name':'Amazon Pay'}
  ]
  return (
    <div className='navbarBanner'>
      <div className='navbarbanneroptionsleft'> 
          <div className='optionnavbarbanner'>
            <MenuIcon sx={{fontSize:"24px"}}/>
            <div className='alloptionnavbarbanner'>All</div>
          </div>
          {
            option.map((item,ind)=>{
              return(
                <Link to ={'/product'} className='optionnavbarbanner' key={ind}>
                <div className='alloptionnavbarbanner'>{item.name}</div>
                </Link>
              );
            })
          }
         
          
      </div>
      <div className='navbarbannerrightside'>
        <img src='https://m.media-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_PC_SWM_STARTS._CB796635378_.jpg' alt='amazonprime logo'/>
      </div>
    </div>
  )
}

export default Navbarbanner
