import React from 'react'
import './product.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import productDetail from './products.json'
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from "../../Redux/actions/actions";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items);

    const handleAddToCart=(item)=>{
        toast.success("Successfully Added in Cart",{
            position:"bottom-right"
        })
          dispatch(addToCart(item))
    }
  return (
    <div className='productpage'>
        <div className='producttopbanner'>
            <div className='producttopbanneritem'>
                Electronics
            </div>
            <div className='producttopbanneritemsubmenu'>Mobiles & Accessories</div>
            <div className='producttopbanneritemsubmenu'>Laptops & Accessories</div>
            <div className='producttopbanneritemsubmenu'>T.V & Home Entertainment</div>
            <div className='producttopbanneritemsubmenu'>Audio</div>
            <div className='producttopbanneritemsubmenu'>Cameras</div>
            <div className='producttopbanneritemsubmenu'>Computer Peripherals</div>
            <div className='producttopbanneritemsubmenu'>Smart Technology</div>
            <div className='producttopbanneritemsubmenu'>Musical Instruments</div>
            <div className='producttopbanneritemsubmenu'>Office & Stationary</div>
        </div>
      <div className='productpagemain'>
        <div className='productpagemainleftcategory'>
            <div className='productpagemainleftcategorytitle'>
            Category
            </div>
            <div className='productpagemainleftcategorycontent'>
                <div className='productpagemainleftcategorytitlecontent'>Computer & Accessories</div>
                <div className='productpagemainleftcategorycontentsub'> Macbook</div>
                <div className='productpagemainleftcategorycontentsub'> Amazon Prime</div>
                <div className='productpagemainleftcategorycontentsub'> Average Customer Review</div>
                <div className='rightleftbox'>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <div className='andup'> & up</div>
                </div>
                <div className='rightleftbox'>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <div className='andup'> & up</div>
                </div>
                <div className='rightleftbox'>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <div className='andup'> & up</div>
                </div>
                <div className='rightleftbox'>
                    <StarRateIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <StarOutlineOutlinedIcon sx={{fontSize:'20px', color:'#febd69'}}/>
                    <div className='andup'> & up</div>
                </div>
                <div className='productpagemainleftcategorycontentsub'>Amazon Prime</div>
                <div className='productpagemainleftcategorycontentsub'>Average Customer Review</div>
                <div className='productpagemainleftcategorycontentsub'>Amazon Prime</div>
                <div className='productpagemainleftcategorycontentsub'>Average Customer Review</div>
                <div className='productpagemainleftcategorycontentsub'>Amazon Prime</div>
                <div className='productpagemainleftcategorycontentsub'>Average Customer Review</div>
                <div className='productpagemainleftcategorycontentsub'>Amazon Prime</div>
                <div className='productpagemainleftcategorycontentsub'>Average Customer Review</div>
                
            </div>
            </div>
            <div className='productpagemainright'>
                <div className='productpagemainrighttopbanner'>
                    1-5 of 5 results for <span className='productpagemainrighttopbannerspan'>Electronics</span>
                </div>
                <div className='itemimageproductpage'>
                    {
                        productDetail.product.map((item,index)=>{
                            return(
                                <div className='itemimageproductpageone' key={item.id}>
                                <div className='imageBlockitemimageproductpageone'>
                                <img src={item.imageUrl} className='productimageproduct'/>
                                </div>
                                <div className='productnameproduct'>
                                    <div>{item.name}</div>
                                    <div className='productnameproductrating'>
                                        <StarRateIcon sx={{fontSize:'16px', color:'#febd69'}}/>
                            <StarRateIcon sx={{fontSize:'16px', color:'#febd69'}}/>
                            <StarRateIcon sx={{fontSize:'16px', color:'#febd69'}}/>
                            <StarRateIcon sx={{fontSize:'16px', color:'#febd69'}}/>
                            <StarOutlineOutlinedIcon sx={{fontSize:'16px', color:'#febd69'}}/>
                                    </div>
                                    <div className='priceproductdetailpage'>
                                        <div className='currencytext'>₹</div>
                                        <div className='ratehomedetail'>
                                            <div className='ratehomedetailprice'>{item.price}</div>
                                            <div className='addtobasketbtn' onClick={()=>{handleAddToCart(item)}}> Add To Cart</div>
                                        </div>
                                    </div>
                                    <div className='offproductpage'> up to 10% off on select cards</div>
                                    <div className='freedeliveryhomepage'>Free Delivery By Amazon</div>
                                </div>
                            </div>
                            );
                        })
                    }
                    
                </div>
            </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product
