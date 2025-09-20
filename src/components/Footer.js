import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <p className="logo">&copy; {currentYear} leesaeyoung</p>
      </div>
      <div className='footer__link'>
        <Link to='https://instagram.com' target="_blank"><p>Instagram</p></Link>
        <Link to='https://github.com/twothreezero' target="_blank"><p>Github</p></Link>
      </div>
    </footer>
  )
}

export default Footer;