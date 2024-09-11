import React from 'react' //eslint-disable-line
import './back.css'


const Back = () => {
  return (
    <div className='background'>
       <div className='background-content'>
        <span>
          <h2>
          Welcome to <br /> SwiftShip Logistics
          </h2>
        </span>
       <span>
       <input className='track' type="text" name="" placeholder='Your Tracking Id' id="" />
       <button className='track-button'>TRACK</button>
       </span>
       </div>
      
    </div>
  )
}

export default Back