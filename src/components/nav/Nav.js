import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ home, about, menu, reservations, orderOnline, login }) {
  return (
    <nav>
      <ul className='list'>
        <li><Link to="/home">{home}</Link></li>
        <li><Link to="/about">{about}</Link></li>
        <li><Link to="/menu">{menu}</Link></li>
        <li><Link to="/reservations">{reservations}</Link></li>
        <li><Link to="#specials">{orderOnline}</Link></li>
        <li><Link to="/login">{login}</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
