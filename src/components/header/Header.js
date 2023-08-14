import React from 'react'
import Nav from '../nav/Nav'
import logo from "../../assets/logos/little-lemon.svg"

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      
      <Nav 
        home="Home"
        about="About"
        menu="Menu"
        reservations="Reservations"
        orderOnline="Order Online"
        login="Login"
      />
    </header>
  )
}

export default Header