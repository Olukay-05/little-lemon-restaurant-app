import React from 'react'
import restaurant from '../../assets/images/restaurant.jpg'

function Chicago() {
  return (
      <section className="about" >
        <article className="hero-content">
          <div className="text-container content">
            <div>
              <h1>Little Lemon</h1>
              <h3> <span>Chicago</span> </h3>
            </div>
            <div className='hero-text color'>
              Little Lemon is a charming neighborhood bistro
              that serves simple food and classic cocktails
              in a lively but casual environment. The restaurant features
              a locally-sourced menu with daily specials.
              <br /> <br />
              Little Lemon is a charming neighborhood bistro
              that serves simple food and classic cocktails
              in a lively but casual environment. The restaurant features
              a locally-sourced menu with daily specials.
            </div>
          </div>

          <div className='about-image'>
            <img src={ restaurant } alt="About Little lemmon Restaurant" />
          </div>
        </article>
      </section>
  )
}

export default Chicago