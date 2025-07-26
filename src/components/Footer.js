import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="container">
        <p>
          <span>&copy;&nbsp;</span>
          <span>{currentYear}.&nbsp;</span>
          <span className="logo">twothreezero&nbsp;</span>
          <span>all rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;