import React from 'react'

function Nav({ home, about, menu, reservations, orderOnline, login  }) {
  return (
    <nav>
      <ul>
        <li> <a href="home">{home}</a></li>
        <li> <a href="about"> {about} </a></li>
        <li> <a href="menu"> {menu} </a></li>
        <li> <a href="reservations"> {reservations} </a></li>
        <li> <a href="order-online"> {orderOnline} </a></li>
        <li> <a href="login"> {login} </a></li>
      </ul>
    </nav>
  )
}

export default Nav