import React from 'react';
import Logo from '../Assets/logo-no-background.png';
import '../Sass/footer.scss';

const Footer = () => (
  <footer>
    <div className='footer-logo-container'>
      <img src={Logo} alt='Logo' />
      <p>© 2024 SX. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
