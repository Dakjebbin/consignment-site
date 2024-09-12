import React from 'react' //eslint-disable-line
import { Swift } from './swift/Swift'
import Services from './services/Services'
import Team from './team/Team'
import Back from './background/Back'



const App = () => {
  return (
 <div className='app'>
  <Swift/>
<Back/>
    <Services/>
  <Team/>
  </div>
  )
}

export default App