import React, { useState } from 'react';
import Nav from '../nav/Nav';
import logo from '../../assets/logos/little-lemon.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div>
        <Nav
          home="Home"
          about="About"
          menu="Menu"
          reservations="Reservations"
          orderOnline="Order Online"
          login="Login"
          mobileNavOpen={mobileNavOpen} // Pass the mobileNavOpen state to Nav component
        />
{/* 
        <button className='nav-btn nav-close-btn' onClick={toggleMobileNav}>
          <FaTimes />
        </button> */}
      </div>
    
      {/* <button className='nav-btn' onClick={toggleMobileNav}>
        <FaBars />
      </button> */}
    </header>
  );
}

export default Header;
