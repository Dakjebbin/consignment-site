import React, { useState } from 'react' //eslint-disable-line
import { asset } from '../images/assets'
import './Swift.css'
import { Link } from 'react-router-dom';



export const Swift = () => {

    const [menu, setMenu] = useState('menu');

  return (
    <div>
        <header>
            <div className='image-logo'>
                <img src={asset.logo} alt="" />
            </div>
            <div>
                <ul>
                    <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>
                        Home
                    </Link>
                    <a href='#about-menu' onClick={()=>setMenu('About')} className={menu==='About'?'active':''}>About</a>
                    <a href='#services' onClick={()=>setMenu('Services')} className={menu==='Services'?'active':''}>Services</a>
                    <a href='#support' onClick={()=>setMenu('Support')} className={menu==='Support'?'active':''}>Support</a>
                </ul>
            </div>
            <button className='contact-button'>Contact Us</button>
            <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
           
        </header>
    </div>
  )
}
