import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import bruschetta from '../../assets/images/bruschetta.svg'

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/booking');
  };
  return (
    <>
      <section className="hero-container">
        <article className="hero-content">
          <div className="text-container">
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <div className='hero-text'>
              Little Lemon is a charming neighborhood bistro
              that serves simple food and classic cocktails
              in a lively but casual environment. The restaurant features
              a locally-sourced menu with daily specials.
            </div>
            <button onClick={handleReserveClick}>
              Reserve a table
            </button>
          </div>

          <div className='image-container'>
            <img src={bruschetta} alt="bruschetta" />
          </div>
        </article>
      </section>
    </>
  )
}

export default CallToAction