import React from 'react'
import bruschetta from '../../assets/images/bruschetta.svg'
import bruschettas from '../../assets/images/bruschetta.jpg'
import greekSalad from '../../assets/images/greek-salad.jpg'
import lemmonDessert from '../../assets/images/lemondessert.jpg'
import deliveryIcon from '../../assets/logos/delivery-bike.svg'
import slicedToast from '../../assets/images/sliced-sauce-toast.jpg'

function Main() {
  return (
    <>
      <main>
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
              <button>
                Reserve a table
              </button>
            </div>

            <div className='image-container'>
              <img src={bruschetta} alt="bruschetta" />
            </div>
          </article>
        </section>

        <section className="highlights-container">
          <article className="highlights-content">
            <div className="heading">
              <h3>This weekly specials!</h3>
              <button>Online Menu</button>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="image-card">
                  <img src={greekSalad} alt="greek salad" />
                </div>
                <div className="card-text">
                  <div className="card-title">
                    <h4>Greek salad</h4>
                    <p>$12.99</p>
                  </div>

                 
                  <p className="card-paragraph">
                    The famous greek salad of crispy lettuce, 
                    peppers, olives and our Chicago style feta 
                    cheese, garnished with crunchy garlic and 
                    rosemary croutons
                  </p>
                  

                  <div className='order-delivery'>
                    <p>Order a delivery</p>
                    <div>
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
              <div className="image-card">
                  <img className='img' src={bruschettas} alt="bruschettas" />
                </div>
                <div className="card-text">
                  <div className="card-title">
                    <h4>Bruchetta</h4>
                    <p>$5.99</p>
                  </div>

                 
                  <p className="card-paragraph">
                    Our Bruschetta is made from grilled bread 
                    that has been smeared with garlic and seasoned 
                    with salt and olive oil. 
                  </p>
                  

                  <div className='order-delivery'>
                    <p>Order a delivery</p>
                    <div>
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="image-card">
                  <img src={lemmonDessert} alt="greek salad" />
                </div>
                <div className="card-text">
                  <div className="card-title">
                    <h4>Lemmon Dessert</h4>
                    <p>$12.99</p>
                  </div>

                  <div className="card-paragraph">
                    <p >
                      This comes straight from grandma’s 
                      recipe book, every last ingredient has 
                      been sourced and is as authentic as can 
                      be imagined.
                    </p>
                  </div>
                 
                    

                  <div className='order-delivery'>
                    <p>Order a delivery</p>
                    <div>
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="image-card">
                    <img src={slicedToast} alt="greek salad" />
                  </div>
                  <div className="card-text">
                    <div className="card-title">
                      <h4>Sauced toast</h4>
                      <p>$12.99</p>
                    </div>

                  
                    <p className="card-paragraph">
                      Delight in a savory creation of sliced sauced toast. 
                      A quick recipe blending flavors for a satisfying 
                      culinary experience.
                    </p>
                    

                    <div className='order-delivery'>
                      <p>Order a delivery</p>
                      <div>
                        <img src={deliveryIcon} alt="delivery" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </article>
        </section>

        <section className="testimonials">
          <h4>Testimonials</h4>
          <div className="testimonial-cards">
            <div className='rating-cards'>
              <span></span>
            </div>
            <div className='rating-cards'></div>
            <div className='rating-cards'></div>
            <div className='rating-cards'></div>
          </div>
        </section>
        <section className="about">
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

            <div className='image-container about-image'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Main