import React from 'react';
import Navbar from './NavMenu';
import '../Sass/header.scss'
import Logo from '../Assets/logo-no-background.png'

function Header() {
  return (
    <header id='header' className='header-container'>
      <div className='flex-container'>
        <div className='logo-container'>
          <img src={Logo} alt='Logo' />
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
