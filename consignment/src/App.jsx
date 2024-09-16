import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Swift } from './swift/Swift';
import Services from './services/Services';
import Team from './team/Team';
import Loader from './Loader/Loader';
import Testimonial from './testimonials/Testimonial';
import Clients from './clients say/Clients';
import Footer from './footer/Footer';
import Support from './support/Support';
import Home from './Home/Home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Router>
      <div className="app">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Swift />
            <Routes>
              {/* Route for the Support page */}
              <Route path="/support" element={<Support />} />
              {/* Main page components */}
              <Route path="/" element={
                <>
                  <Home />
                  <Services />
                  <Team />
                  <Testimonial />
                  <Clients/>
                  <Footer />
                  
                </>
              }/>
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
