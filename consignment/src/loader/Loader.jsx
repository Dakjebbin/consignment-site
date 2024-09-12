import React from 'react'
import './loader.css'
import { asset } from '../images/assets'


const Loader = () => {
  return (
    <div className='loader-container'>
       <img className='logo-reduce' src={asset.logo} alt="" />
        <div className='spinner'>
        
        </div>
        <h2>Please Wait</h2>
    </div>
    
  )
}

export default Loader