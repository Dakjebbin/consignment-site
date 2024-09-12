import React, { useEffect, useState } from 'react' //eslint-disable-line
import { Swift } from './swift/Swift'
import Services from './services/Services'
import Team from './team/Team'
import Back from './background/Back'
import Loader from './Loader/Loader'
import Footer from './footer/Footer'



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLoading(false);}, 3000);
  }, []);

  return (
 <div className='app'>
  {loading ? ( <Loader/> ) : ( <>
  <Swift/>
<Back/>
    <Services/>
  <Team/>
  <Footer/>
  </>)}
  </div>
  );
};

export default App