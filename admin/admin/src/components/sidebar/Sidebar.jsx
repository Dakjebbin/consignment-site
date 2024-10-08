import React from 'react' // eslint-disable-line
import { assets } from '../../assets/assets'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Codes</p>
            </NavLink>

            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>

           
        </div>
    </div>
  )
}

export default Sidebar