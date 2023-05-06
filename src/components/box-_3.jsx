import React from 'react'
import { BsCurrencyRupee} from "react-icons/bs"

const box = () => {
  return (
    <div>
       <div className="p-2 col-4">
                    <div className="card " style={{width: "auto"}}>
                         <div className="card-body bg-secondary  justify-content-between align-items-center flex-grow-1 bg-white p-3 rounded-3">
                           <div>
                              <h5 className="card-title text-center"> <BsCurrencyRupee  className='fs-bold  fs-30'/> <span className='text-bold'>16,58,000</span></h5>
                              <h6 className="card-subtitle text-center">Last Month Sale</h6>
                           </div>

                           <div className='row'>
                            <div className='col-6'>
                              {/* <FaUserTie  className='fs-5 mt-5'/> */}
                            </div>
                            <div className='col-6'>
                            <table>
                              <tbody>
                               <td>Gold</td>
                               <td className='bg-warning'>5</td>
                              </tbody>
                              <tbody>
                                <td>Platinum</td>
                                <td>5</td>
                              </tbody>
                              <tbody>
                                <td>Titanium</td>
                                <td>5</td>
                              </tbody>
                            </table>
                            </div>
                           </div>
                           
                           
                        </div>
                    </div>
                    </div> 
    </div>
  )
}

export default box
