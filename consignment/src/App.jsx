import React, { useEffect, useState } from 'react' //eslint-disable-line
import { Swift } from './swift/Swift'
import Services from './services/Services'
import Team from './team/Team'
import Back from './background/Back'
import Loader from './Loader/Loader'
import Footer from './footer/Footer'
import Testimonial from './testimonials/Testimonial'
import Clients from './clients say/Clients'



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLoading(false);}, 1000);
  }, []);

  return (
 <div className='app'>
  {loading ? ( <Loader/> ) : ( <>
  <Swift/>
<Back/>
    <Services/>
  <Team/>
  <Testimonial/>
  <Clients/>
  <Footer/>
  
  </>)}
  </div>
  );
};

export default App