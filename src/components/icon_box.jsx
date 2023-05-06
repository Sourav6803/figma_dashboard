import React from 'react'
import './icon_box.css'
import {BsAndroid2, BsApple} from 'react-icons/bs'

function IconBox() {
  return (
    <>
        <div className='  line-div  ' style={{height:"83vh", width:"23vw"}}>
          <div className='d-flex align-items-center justify-content-center  gap-3  '>
             <BsApple className='fs-5 '/>
             <BsAndroid2 className='fs-5 '/>
             <h2>102</h2>
          </div>
          <div className='month '>
             <h6 className=''>Install this Month</h6>
          </div>
          <div className=''>
            <button className='border border-dark w-40 m-auto customer'>See all customer</button>
          </div>
          <div className='mt-3 '>
            <h5 className='text-bold'>Currency Vs <br/> Commodities</h5>
          </div>
          <div>
            <div>
              <img src='https://png.pngtree.com/element_our/sm/20180515/sm_5afafeb131875.jpg' className='img-fluid' style={{height:"70px", width:"70px"}} />
              <img src='https://png.pngtree.com/png-vector/20210608/ourmid/pngtree-gold-block-wealth-asset-bank-png-image_3397641.jpg' style={{height:"70px", width:"70px"}}/>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-4'>
              <p className=''>7K <br/>Clicks</p>
              <p className='g-3'>10.6K <br/>Clicks</p>
            </div>
          </div>
        </div>
    </>

    
  )
}

export default IconBox