import React from 'react'//eslint-disable-line
import './services.css'
import { asset } from '../images/assets'

const Services = () => {
  return (
    <div id='services' className='main-services'>
        <div>
            <h2 className='serve'>Our Services</h2>
        </div>
        <div className='services-grid'>
            <div className='grid-1'>
                <img className='transit-logo' src={asset.logo} alt="" />
                <h4>Land Transport</h4>
                <p>
                Efficient and reliable ground transportation solutions 
                for your cargo needs. From trucks to trains, we offer comprehensive
                land transport services to ensure your goods reach their destination safely and on time.
                </p>

            </div>

            <div className='grid-1'>
            <img className='transit-logo' src={asset.logo} alt="" />
                <h4>Ship Transport</h4>
            <p>
            Tap into global trade opportunities with our sea freight services.
             Whether you&apos;re shipping across oceans or along coastlines, 
            we provide cost-effective and timely solutions tailored to your cargo requirements.
            </p>
            
            </div>
            <div className='grid-1'>
            <img className='transit-logo' src={asset.logo} alt="" />
                <h4>Air Transport</h4>
                <p>
                Accelerate your supply chain with our swift and secure air freight services. 
                Experience the speed and efficiency of aerial transportation for your time-sensitive shipments.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services