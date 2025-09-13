import React from 'react'
import './navbarbelt.css'
import amazonLogo from '../../../Assets/amaz-logo.jpeg';
import India from '../../../Assets/india2.png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const Navbarbelt = () => {
  const cartItem= useSelector((state)=> state.cart.items)
  return (
    <div className='navbarbelt'>
      <div className='leftnavbelt'>
        <Link to ={'/'} className='leftnavbeltlogo'>
          <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo'/>
          <span className='navbar_inLogo'>.in</span>
        </Link>

        <div className='navbarBeltLocation'>
          <div ClassName="navbarlocationimg">
           <FmdGoodOutlinedIcon className='navbarbeltLocationIcon' sx={{fontSize:"22px"}}/>
          </div>
          <div className='navbarbeltLocationPlace'>
            <div className='navbarbeltLocationTop'> Delivering to Pune 411032</div>
            <div className='navbarbeltLocationBottom'>Update Location</div>

          </div>
        </div>
      </div>
      <div className='navbarbeltsearchbox'>
        <div className='navbarbeltSearchDiv'>
        <div className='navbarbeltSearchBoxAll'>
        <div className='navbarbeltsearchboxAllText'> All</div>
        <ArrowDropDownOutlinedIcon sx={{fontSize:"20px"}}/>
         </div>
         <input type='text' className='navbarbeltinputSearchBox' placeholder='Search Amazon.in'/>
         <div className='searchiconnavbarbelt'>
            <SearchIcon sx={{fontSize:"20px"}} className='searchiconnavbarbelticon'/>
         </div>
         </div>
         <div className='indianflagcode'>
            <img src={India} className='indiaflag' />

            <div className='indiacodenavbarbelt'> EN <ArrowDropDownOutlinedIcon sx={{fontSize:16 ,marginTop:1,marginLeft:-0.4}} className='indiacodenavbarbeltdrp'/>
            </div>
        </div>
         </div>
         <div className='rightnavbelt'>
       
        <div className='hellosigninnavbarbelt'>
            <div className='hellotopnavbarbelt'> Hello, Sign in</div>
            <div className='indiacodenavbarbelt'> Account & Lists</div>

        </div>
        <div className='hellosigninnavbarbelts'>
            <div className='hellotopnavbarbelt'> Returns</div>
            <div className='indiacodenavbarbelt'> & Orders</div>
            </div>
      
            <Link to={'/cart'} className='hellosigninnavbarbelt'>
  <span className='cartitemnumbernavbarbelts'>{cartItem.length}</span>
  <div className='hellotopnavbarbelt'>
    <ShoppingCartOutlinedIcon />
    <span className='carttittle'>Cart</span>
  </div>
</Link>

      </div>
  </div>
  )
}

export default Navbarbelt
