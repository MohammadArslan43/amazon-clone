import React from 'react'
import './homebanner.css';
import homebanneritemproduct from '../../../Product.json'

const homebanner = () => {
  return (
    <div className='homebanner'>
        <img className='homebannerimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fresh/MayART25/GW/Hero/30/FC/NC/30th_GW_PC1x_Hero_NC._CB796730924_.jpg' alt='arsu'/>
        <div className='graybackgroundhomebanner'></div>

        <div className='homebanneritemdiv'>
            {
                homebanneritemproduct.product.map((item,ind)=>{
                    return(
                        <div className='homebanneritemdivcard'>
        <div className='homebanneritemdivcardtittle'> {item.itemTitle}</div>
        <div className='imghomebanneritemdivcard'>
            {
                item.imgs.map((it,ind)=>{
                    return(
                        <div className='imgbannerhomediv'>
                        <img className='imgbannerhomedivimg' src={it}/>
                        <div className='imgbannerimgname'>Air conditioners</div>
                    </div>
                 
                    );
                })
            }
           
         
        </div>
        <div className='seemorehomebanner'>See More →</div>
        </div>
                    );
                })
            }
        {/* <div className='homebanneritemdivcard'>
        <div className='homebanneritemdivcardtittle'> tittle</div>
        <div className='imghomebanneritemdivcard'>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'/>
                <div className='imgbannerimgname'>Air conditioners</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'/>
                <div className='imgbannerimgname'>Refrigerators</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'/>
                <div className='imgbannerimgname'>Microwaves</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'/>
                <div className='imgbannerimgname'>Waching machine</div>
            </div>
        </div>
        
      </div> */}
      {/* <div className='homebanneritemdivcard'>
        <div className='homebanneritemdivcardtittle'> Revamp your home in style</div>
        <div className='imghomebanneritemdivcard'>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg'/>
                <div className='imgbannerimgname'>cusion cover,badsheet & more</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'/>
                <div className='imgbannerimgname'>figurines, vases & more</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg'/>
                <div className='imgbannerimgname'>home storage</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg'/>
                <div className='imgbannerimgname'>lighting solutions</div>
            </div>
        </div>
        
      </div>
      <div className='homebanneritemdivcard'>
        <div className='homebanneritemdivcardtittle'> Automotive essentials | Up to 60% off</div>
        <div className='imghomebanneritemdivcard'>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg'/>
                <div className='imgbannerimgname'>Cleaning accessories</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg'/>
                <div className='imgbannerimgname'>Tyre & rim care</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg'/>
                <div className='imgbannerimgname'>Helmets</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg'/>
                <div className='imgbannerimgname'>Vaccum Cleaner</div>
            </div>
        </div>
        
      </div>
      <div className='homebanneritemdivcard'>
        <div className='homebanneritemdivcardtittle'> Starting ₹199 | Amazon Brand & more</div>
        <div className='imghomebanneritemdivcard'>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg'/>
                <div className='imgbannerimgname'>Starting ₹199 | bedsheet </div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg'/>
                <div className='imgbannerimgname'>Starting ₹199 | curtains</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg'/>
                <div className='imgbannerimgname'>Minimum 40% off | ironing board & more</div>
            </div>
            <div className='imgbannerhomediv'>
                <img className='imgbannerhomedivimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg'/>
                <div className='imgbannerimgname'>Up to 60% 0ff | home decor</div>
            </div>
        </div>
        
      </div> */}
      </div>
    </div>
  )
}

export default homebanner
