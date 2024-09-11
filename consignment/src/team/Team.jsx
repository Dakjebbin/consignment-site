import React from 'react'//eslint-disable-line
import './team.css'
import { asset } from '../images/assets'

const Team = () => {
  return (
    <div id='about-menu'>
      <div className='team-grid'>
      <div>
        <img src={asset.delivery} alt="" />
      </div>

      <div className='about'>
        <h5 className='company-brief'>About Our Company</h5>
        <h3 className='text-short'>Reliable Logistics & Transport Solution Saves Your Time</h3>
        <div className='grid-box'>
        <div>
          <p>SwiftShip Logistics is a comprehensive logistics operator providing a 
            full range of services in customs clearance and global transportation for all types of cargo. 
            We ensure smooth and efficient handling for your logistics needs worldwide.
          </p>
        <br />
        <br />
          <p>
          We&apos;re more than just a logistics company – we&apos;re your trusted logistics partner, 
          dedicated to delivering excellence with every shipment. Experience the difference today
          and let us help you save both time and peace of mind
          </p>
<br />
          <h6 className='founder'>James Edgerton</h6>
          <p>Founder</p>

        </div>

        <div className='quality-grid'>
          <ul>
            <li>Quality</li>
          </ul>
          <p>Following the Quality of our Service thus having gained trust of our many clients.</p>

<br />
          <ul>
            <li>Reliability</li>
          </ul>
          <p>We Provide with Cargo safety throughout all the stages of our delivery process.</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Team