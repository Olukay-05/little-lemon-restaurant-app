// import React from 'react';
// import { Link } from 'react-router-dom';

// function Nav({ home, about, menu, reservations, orderOnline, login }) {

//   return (
//     <nav >
//       <ul className='list responsive_nav'>
//         <li><Link to="/home">{home}</Link></li>
//         <li><Link to="/about">{about}</Link></li>
//         <li><Link to="/menu">{menu}</Link></li>
//         <li><Link to="/booking">{reservations}</Link></li>
//         <li><Link to="#specials">{orderOnline}</Link></li>
//         <li><Link to="/login">{login}</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ home, about, menu, reservations, orderOnline, login }) {
  return (
    <nav className='nav'>
        <Link to="/home" className="navbar-link">{home}</Link>
        <Link to="/about" className="navbar-link">{about}</Link>
        <Link to="/menu" className="navbar-link">{menu}</Link>
        <Link to="/booking" className="navbar-link">{reservations}</Link>
        <Link to="/specials" className='navbar-link'>{orderOnline}</Link>
        <Link to="/login" className='navbar-link'>{login}</Link>
    </nav>
  );
}

export default Nav;
