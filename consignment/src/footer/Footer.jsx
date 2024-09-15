import React from 'react'
import './footer.css'
import { asset } from '../images/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='main-footer'>
            <span className='tel'>
            <h2>
                We Understand The Importance <br /> Approaching Each Work!
            </h2>
            <a href="tel:+1(782)207-9667">+1 (782) 207-9667</a>
            </span>
            <hr />

            <div className='grid-footer'>
              <div>
      <img className='white-footer' src={asset.white_logo} alt="" />

      <div className='write-up'>
        <p>Experience the difference today and let us <br />help you save both time and Money.</p>
      </div>

      
              </div>
    
              <div className='company-footer'>
                <h2>QUICK LINKS</h2>
                <ul>
                  <Link to='/'>
                    Home
                  </Link>

                  <a href='#about-menu'>
                    About
                  </a>

                  <a href='#services'>
                    Services
                  </a>

                  <li>
                    Support
                  </li>
                </ul>
              </div>

              <div className='open-hours'>
                <h2>
                OPEN HOURS
                </h2>

                <div className='working-time'>
                  <p>Monday 11am-7pm</p>
                  <p>Tuesday-Friday 11am-8pm</p>
                  <p>Saturday 10am-6pm</p>
                  <p>Sunday 11am-6pm</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer