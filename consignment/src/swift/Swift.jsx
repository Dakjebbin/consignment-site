import React, { useState } from 'react'; //eslint-disable-line
import { asset } from '../images/assets';
import './Swift.css';
import { Link } from 'react-router-dom';


export const Swift = () => {
  // State to manage active menu item
  const [menu, setMenu] = useState('Home');
  
  // State for sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar
  const handleButtonClick = () => {
    setSidebarVisible(false);
  };

  return (
    <div className='main-header' >
      <header>
        <div className="image-logo">
          <img src={asset.logo} alt="Company Logo" />
        </div>
        <nav>
          <ul>
    
            <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
              Home
            </Link>
            <a href='#about-menu' onClick={() => setMenu('About')} className={menu === 'About' ? 'active' : ''}>
              About
            </a>
            <a href='#services' onClick={() => setMenu('Services')} className={menu === 'Services' ? 'active' : ''}>
              Services
            </a>
            <a onClick={() => setMenu('Support')} className={menu === 'Support' ? 'active' : ''}>
              Support
            </a>
          </ul>
        </nav>
        <button className="contact-button">Contact Us</button>
        
        {/* Hamburger icon to toggle sidebar */}
        <svg className="hamburger js-open-button" onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#e8eaed">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </header>

      {/* Mobile View Sidebar */}
      <div className="mobile-menu" style={{ display: isSidebarVisible ? 'flex' : 'none' }}>
        <svg className="close-button js-close-button" onClick={handleButtonClick} xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#e8eaed">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <ul>
          <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
            Home
          </Link>
          <a href='#about-menu' onClick={() => setMenu('About')} className={menu === 'About' ? 'active' : ''}>
            About
          </a>
          <a href='#services' onClick={() => setMenu('Services')} className={menu === 'Services' ? 'active' : ''}>
            Services
          </a>
          <a href='' onClick={() => setMenu('Support')} className={menu === 'Support' ? 'active' : ''}>
            Support
          </a>
        </ul>
      </div>
    </div>
  );
};
