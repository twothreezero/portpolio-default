import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/logo.png'
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo" >
            <img className='logo' src={img} alt='logo' />
            PORTFOLIO
          </div>
        </Link>
        <ul className='header__menu'>
          {/* <Link to="/menu">
            <li>menu</li>
          </Link> */}
          <Link to="/info">
            <li className="info">info</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header;