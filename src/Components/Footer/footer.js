import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazon-logo.webp'
   


const footer=()=>{
    return(
<div className='footer'>

    <div className='footercontent'>
        <div className='footercont1'>
            <div className='contentfootertitle'> Get To Know Us</div>
            <div className='contentfootersubtitlediv' >
                <div className='contentfootersubtitlecont'> About Us</div>
                <div className='contentfootersubtitlecont'> Careers</div>
                <div className='contentfootersubtitlecont'> Press Release</div>
                <div className='contentfootersubtitlecont'> Amazon Science</div>
            </div>
        </div>
        <div className='footercont1'>
            <div className='contentfootertitle'> Connect With Us</div>
            <div className='contentfootersubtitlediv' >
                <div className='contentfootersubtitlecont'> Instagram</div>
                <div className='contentfootersubtitlecont'> Twitter</div>
                <div className='contentfootersubtitlecont'> Facebook</div>
                
            </div>
        </div>
        <div className='footercont1'>
            <div className='contentfootertitle'> Make Money With Us</div>
            <div className='contentfootersubtitlediv' >
                <div className='contentfootersubtitlecont'> Sells on Amazon</div>
                <div className='contentfootersubtitlecont'> Sells Under Amazon Accelerator</div>
                <div className='contentfootersubtitlecont'> Protect And Build Your Brand</div>
                <div className='contentfootersubtitlecont'> Amazon Global Selling</div>
                <div className='contentfootersubtitlecont'> Became An Affiliate</div>
                <div className='contentfootersubtitlecont'> Fulfilment By Amazon</div>
            </div>
        </div>
        <div className='footercont1'>
            <div className='contentfootertitle'> Let Us Help You</div>
            <div className='contentfootersubtitlediv' >
                <div className='contentfootersubtitlecont'> COVID-19 And Amazon</div>
                <div className='contentfootersubtitlecont'> Your Account</div>
                <div className='contentfootersubtitlecont'> Returns Center</div>
                
            </div>
        </div>
    </div>
    <div className='amazonimg'>
        <img className='amazonimgfooter' src={amazonLogo}/>
            </div>

</div>
    )
}
  


export default footer