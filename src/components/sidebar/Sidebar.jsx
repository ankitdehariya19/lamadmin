import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className='top'>
              <span className='logo'>lamadmin</span>
         </div>
           <hr/>
         <div className='center'>
               <ul>
                    <p className='title'>MAIN</p>
                   <li> 
                       <DashboardIcon className='icon'/>
                        <span>Dashbord</span>
                   </li>
                   <p className='title'>LISTS</p>
                   <li> 
                        <PersonOutlinedIcon className='icon'/>
                        <span>Users</span>
                   </li>
                   <li> 
                        <HomeWorkOutlinedIcon className='icon'/>
                        <span>Products</span>
                   </li>
                   <li> 
                        <AddCardOutlinedIcon className='icon'/>
                        <span>Orders</span>
                   </li>
                   <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <span>Delivery</span>
                   </li>
                   <p className='title'>USEFULL</p>
                   <li>  
                       <PollOutlinedIcon className='icon'/>  
                        <span>Stats</span>
                   </li>
                   <li>
                        <NotificationsActiveOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                   </li>
                   <p className='title'>SERVICE</p>
                   <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System health</span>
                   </li>
                   <li>
                       <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                   </li>
                   <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                   </li>
                   <p className='title'>USER</p>
                   <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>profile</span>
                   </li>
                   <li>
                        <ExitToAppOutlinedIcon className='icon'/>
                        <span>Logout</span>
                   </li>
               </ul>
         </div>
         <div className='bottom'>
              <div className='colorOption'></div>
              <div className='colorOption'></div>
              <div className='colorOption'></div>
         </div>
    </div>
  )
}

export default Sidebar