import React from 'react'
import Nav from '../nav/Nav'
import footerLogo from '../../assets/logos/footer-logo.svg'

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
      <section className='footer-img'>
        <img src={ footerLogo } alt="Little lemon" className='footerLogo' />
      </section>
      <section className='footer-nav'>
        <h2 className='footer-text'>Doormart Navigation</h2>
        <a href="#" className='footer-text'>Home</a>
        <a href="#" className='footer-text'>About</a>
        <a href="#" className='footer-text'>Menu</a>
        <a href="#" className='footer-text'>Reservations</a>
        <a href="#" className='footer-text'>Order Online</a>
      </section>
   
      <section>
        <h2 className='footer-text'>Contact</h2>
        <ul >
          <li className='footer-text'> {contact.address} </li>
          <li className='footer-text'> {contact.phoneNumber} </li>
          <li className='footer-text'> {contact.email} </li>
        </ul>
      </section>

      <section>
        <h2 className='footer-text'>Social Media Links</h2>
        <ul>
          <li className='footer-text'> {contact.instagram} </li>
          <li className='footer-text'> {contact.twitter} </li>
          <li className='footer-text'> {contact.linkedin} </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer