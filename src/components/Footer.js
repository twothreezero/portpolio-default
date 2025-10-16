import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__text'>
        세상에서 낭만을 느낄 수 있도록
      </p>
      <div className='footer__middle'>
        <p className='footer__text'>
          Always awake
        </p>
      </div>
      <div className='footer__info'>
        <div className='footer__logo'>
          <p className="logo footer__text">&copy; {currentYear} leesaeyoung</p>
        </div>
        <div className='footer__link'>
          <Link to='https://github.com/twothreezero' target="_blank"><p className='footer__text'>Github</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;