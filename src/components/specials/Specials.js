import React from 'react'

import bruschettas from '../../assets/images/bruschetta.jpg'
import greekSalad from '../../assets/images/greek-salad.jpg'
import lemmonDessert from '../../assets/images/lemondessert.jpg'
import deliveryIcon from '../../assets/logos/delivery-bike.svg'
import slicedToast from '../../assets/images/sliced-sauce-toast.jpg'

export default function Specials() {
  return (
    <>
      <section className="highlights-container">
          <article className="highlights-content">
            <div className="heading">
              <h3>This weekly specials!</h3>
              <button 
                className="cta-button"
                aria-label="View Online Menu"
              >
                Online Menu
              </button>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="image-card">
                  <img src={greekSalad} alt="Greek salad" />
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
                      <img src={deliveryIcon} alt="Delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
              <div className="image-card">
                  <img className='img' src={bruschettas} alt="Bruschettas" />
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
                      <img src={deliveryIcon} alt="Delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="image-card">
                  <img src={lemmonDessert} alt="Lemmon dessert" />
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
                      <img src={deliveryIcon} alt="Delivery" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="image-card">
                    <img src={slicedToast} alt="Sliced toast" />
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
                        <img src={deliveryIcon} alt="Delivery" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </article>
        </section>
    </>
  )
}
