import React from 'react'
import Nav from '../nav/Nav'

function Footer() {
  const contact = {
    address: "17, Olamojuba Str, Surulere, Lagos.",
    phoneNumber: "08038277651",
    email: "little-lemon@gmail.com",
    instagram: "instagram",
    twitter: "twitter",
    linkedin: "linkedin",
  }
  return (
    <footer>
      <div>
        <img src="#" alt="#" />
      </div>
      <section className="footer-nav">
        <h2>Doormart Navigation</h2>
        <Nav 
          home="Home"
          about="About"
          menu="Menu"
          reservations="Reservations"
          orderOnline="Order Online"
          login="Login"
          className='side-margin'
        />
      </section>
   

      <section className="footer-nav two">
        <h2>Contact</h2>
        <ul className='side-margin'>
          <li> {contact.address} </li>
          <li> {contact.phoneNumber} </li>
          <li> {contact.email} </li>
        </ul>
      </section>

      <section className="footer-nav three">
        <h2>Social Media Links</h2>
        <ul className='side-margin'>
          <li> {contact.instagram} </li>
          <li> {contact.twitter} </li>
          <li> {contact.linkedin} </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer