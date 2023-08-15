import React from 'react'

import CallToAction from '../callToAction/CallToAction'
import Specials from '../specials/Specials'
import CustomersSay from '../customerSay/CustomersSay'
import Chicago from '../chicago/Chicago'



function Main() {
  return (
    <>
      <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </>
  )
}

export default Main