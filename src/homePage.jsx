import React from 'react'
import './homePage.css'
import BoxSm from './components/box_01_sm'
import Acc from './components/acc'
import LogoCompo from './components/logo_copm'
import Nav from './components/nav'
import Navbar from './components/navbar'
import LineGraph from './components/line_chart'
import IconBox from './components/icon_box'
import { GoReport} from 'react-icons/go'
import {MdReportGmailerrorred} from 'react-icons/md'
import Boxlast from './components/bx_last_4.jsx'
import BoxFive from './components/bx_05'
import {GiFlowerPot} from "react-icons/gi"


const HomePage = () => {
  return (
    <>
    <div className="containerx">
        <div className='sidebar'>
            <div className='d-flex align-content-center justify-content-center'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxx1sk_GDyum3PL-WfkDaavn6wb853eydhQ&usqp=CAU'  style={{height:"80px", width:"80px"}} />
            </div>
            <LogoCompo />
            
            <div className='acc'>
              <Acc title={"USERS"}/>
            </div>

            <div className='acc'>
              <Acc title={"ANALYTICS"} /> 
            </div>

            <div className='acc'>
              <Acc title={"CREATE REPOARTS"} />
            </div>
            <div className='acc'>
              <Acc title={"DOCUMENTATION"} />
            </div>
            <div className='acc'>
              <Acc title={"DOCUMENTATION"} />
            </div>
        </div>

        <div className='page-body'>
        
            <div className='nav'>
              <Navbar />
              
            </div>
            <div className='dash'>
              <div className='dash-title'>
                <h3 className='mb-0'>Dashboard</h3>
                <p >Good afternoon Sourav, <GiFlowerPot className='fs-4'/></p>

              </div>
              <div className='dash-right '>
                <span>
               
                <GoReport />
                &nbsp;
                  Report
                  &nbsp;

                </span>
                <span>
                &nbsp;
                <MdReportGmailerrorred className='fs-5'/>
                  Export

                </span>

              </div>
            </div>

            <div className='box1'>

            <div className='box-sm bobx-shadow text-white'>
              <BoxSm title={"All Customer"} text={"38"}  color={"rgb(246, 67, 67)"} />
                
                    
             </div>
             <div className='box-sm bobx-shadow text-white'>
              <BoxSm title={"Free Trial"} text={"288"} color={"rgb(99, 11, 239)"} />
                
                    
             </div>
             <div className='box-sm bobx-shadow text-white'>
              <BoxSm title={"Active Paid"} text={"96"} color={"rgb(99, 144, 235)"} />
                
             </div>
             <div className='box-sm bobx-shadow text-white'>
              <BoxSm title={"Paid Client"} text={"91"} color={"rgb(154, 158, 161)"} />
                
             </div>

             <div className='box-sm bobx-shadow text-white'>
              <BoxSm title={"Dorment"} text={"100"} color={"rgb(246, 180, 80)"} />
                
             </div>
           </div>
            
           <div className='box2'>
            <div className='line-chart'>
            <LineGraph  />
            </div>
            <div className='icn-bx'>
              <IconBox />
            </div>
            </div>

             <div className='box3'>
               <div className='box-lg'>
                 <Nav />
              </div>
              <div className='box-lg'>
                 <Nav />
              </div>
            </div>


            <div className='box4'>
               <div className='box-md'>
                 <BoxFive />
               </div>
              <div className='box-md '>
                 <BoxFive />
              </div>
              <div className='box-md'>
                 <Boxlast />
              </div>
            </div>

        </div>

        </div>
        </>
    
  )
}

export default HomePage