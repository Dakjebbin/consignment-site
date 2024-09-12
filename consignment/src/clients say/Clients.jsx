import React from 'react'
import './clients.css'
import { asset } from '../images/assets'

const Clients = () => {
  return (
    <div className='clients'>

<div className='clients-say'>
    <h1>
        What Our Clients Say About US
    </h1>
    <p>
    When you ship with Swiftship logisitics – you’re shipping with specialists in international 
    shipping and delivery services! 
    Our top priority is customer satisfaction. Hear what some of our clients say about us.
    </p>
</div>

<div className='grid-client'>
    <div className='grid-client1'>
        <img src={asset.andy} alt="" />

        <p>
        Working with Swiftship logistics has been a game-changer for our business. 
        Their dedication to safety and efficiency is unmatched, 
        and they have consistently delivered our shipments on time, every time <span>&quot;</span>
        </p>
    </div>
    <div className='grid-client1'>
        <img src={asset.edward} alt="" />
        <p>
        These guys are just the coolest logistics company ever! They exceptionally 
        handled our complex road freight services.<span>&quot;</span>
        </p>
    </div>
    <div className='grid-client1'>
        <img src={asset.mary} alt="" />
        <p>
        Their performance on our project was extremely successful.
         As a result of this collaboration, the project was built with exceptional quality & delivered.
         <span>&quot;</span>
        </p>
    </div>
</div>



    </div>
  )
}

export default Clients