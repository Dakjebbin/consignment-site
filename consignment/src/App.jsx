import React, { useEffect, useState } from 'react'; // eslint-disable-line
import { Route, Routes, useLocation } from 'react-router-dom';
import { Swift } from './swift/Swift';
import Services from './services/Services';
import Team from './team/Team';
import Loader from './loader/Loader.jsx';
import Testimonial from './testimonials/Testimonial';
import Clients from './clients say/Clients';
import Footer from './footer/Footer';
import Support from './support/Support';
import Home from './Home/Home';
import ShipmentDetailsPage from './shipment details/ShipmentDetailsPage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Adding Smartsupp script dynamically
  useEffect(() => {
    // Initialize Smartsupp
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '523d589ed2d7e2bafb42854d4dd900b94059d221';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o.push(arguments)};o=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
      



      // Fire event when user visits the website
      smartsupp('on', 'visitor', function(visitor) {
        console.log('New visitor on the website: ', visitor);
        // Here you can send a notification or track the event as needed
        // E.g., you can trigger an alert or call a backend API
      });
    `;
    
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  useEffect(() => {

    const shouldLoad = location.pathname.includes('/support') 
    || location.pathname.includes('/details');

    if (shouldLoad) {
    setLoading(true);
const timeout = setTimeout(() => setLoading(false), 1000);
return () => clearTimeout(timeout);
  } else {
    setLoading(false);
  }
}, [location]);

  return (
      <div className="app">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Swift />
            <Routes>
              {/* Route for the Support page */}
              <Route path="/support" element={<Support />} />
              <Route path="/details/:trackingCode" element={<ShipmentDetailsPage />} />
              {/* Main page components */}
              <Route path="/" element={
                <>
                  <Home />
                  <Services />
                  <Team />
                  <Testimonial />
                  <Clients />
                  <Footer />
                </>
              } />
            </Routes>
          </>
        )}
      </div>
  );
};

export default App;
