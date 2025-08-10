import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/logo.png'

import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="container">
        <Link to="/">
          <div className="header__group">
            <img className="header__logo" src={img} alt="logoImg" />
            <div className="header__title">
              PORTPOLIO
            </div>
          </div>
        </Link>
        <ul className='header__menu'>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/careers">
            <li>CAREERS</li>
          </Link>
          <Link to="/project">
            <li>PROJECT</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;