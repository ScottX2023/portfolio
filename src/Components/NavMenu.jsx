import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Sass/navbar.scss';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div onClick={toggleMenu} className='burger_menu'>
        {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>
      <ul className={`nav_list ${isOpen ? 'open' : ''}`}>
        <li className={location.pathname === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to='/' onClick={toggleMenu}>
            Accueil
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to='/projects' onClick={toggleMenu}>
            Projets
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to='/contact' onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
