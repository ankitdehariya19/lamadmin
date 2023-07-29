import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Circular from "../circular/Circular"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Featured = () => {
  return (
    <div className='featured'>
         <div className='top'>
              <h1 className='title'>Total Revenue</h1>
              <MoreVertOutlinedIcon fontSize='small'/>
         </div>
         <div className='bottom'>
              <div className='featuredChart'>
                <Circular value={70} text={"70%"} strokewidth={5}/>
              </div>
              <p className='title'>Total sales made today</p>
                  <p className='amount'>$4650</p>
                  <p className='desc'>
                     Previous transactions processing. Last payments may not be included.
                  </p>

                  <div className='summary'>
                      <div className='item'>
                            <div className='itemTitle'>Target</div>
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className='itemResult positive'>
                                  <div className='resultAmount'>$12.4k</div>
                            </div>
                      </div>
                      <div className='item'>
                            <div className='itemTitle'>Last Week</div>
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className='itemResult positive negative'>
                                  <div className='resultAmount'>$12.4k</div>
                            </div>
                      </div>
                      <div className='item'>
                            <div className='itemTitle'>Last Month</div>
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className='itemResult positive'>
                                  <div className='resultAmount'>$12.4k</div>
                            </div>
                      </div>
                  </div>
         </div>
    </div>
  )
}

export default Featured