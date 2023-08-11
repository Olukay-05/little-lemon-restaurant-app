import React from 'react'

function Main() {
  return (
    <>
      <main>
        <section className="hero-container">
          <article className="hero-content">
            <div className="text-container">
              {/* <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rerum fugiat fuga quis atque vero, 
                suscipit totam quisquam ullam odit 
                maiores nostrum molestiae explicabo 
                dolore ut provident commodi qui earum incidunt.
              </div>
              <button>
                Reserve a table
              </button> */}
            </div>

            <div className='image-container'>
              <img src="#" alt="#" />
            </div>
          </article>
        </section>
        <section className="highlights-container">
          <article className="highlights-content">
            <div className="heading">
              <h1>This Weekly Specials!</h1>
              <button>Online Menu</button>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="image-card">
                  <img src="#" alt="#" />
                </div>
                <div className="card-text"></div>
              </div>

              <div className="card">
                <div className="image-card">
                  <img src="#" alt="#" />
                </div>
                <div className="card-text"></div>
              </div>

              <div className="card">
                <div className="image-card">
                  <img src="#" alt="#" />
                </div>
                <div className="card-text"></div>
              </div>
            </div>
          </article>
        </section>
        <section className="testimonials"></section>
        <section className="about">
        <article className="hero-content">
            <div className="text-container">
              {/* <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rerum fugiat fuga quis atque vero, 
                suscipit totam quisquam ullam odit 
                maiores nostrum molestiae explicabo 
                dolore ut provident commodi qui earum incidunt.
              </div>
              <button>
                Reserve a table
              </button> */}
            </div>

            <div className='image-container'>
              <img src="#" alt="#" />
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Main