import React from 'react' //eslint-disable-line
import { Swift } from './swift/Swift'
import Services from './services/Services'
import Team from './team/Team'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Cart from './Cart/Cart'

const App = () => {
  return (
 <div className='app'>
  <Swift/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/services' element={<Services/>} />
  </Routes>
  <Team/>
  </div>
  )
}

export default App