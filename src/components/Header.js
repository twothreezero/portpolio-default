import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        leesaeyoung
      </Link>
      <nav className="nav">
        <ul className='nav__list'>
          <li className="nav__item">
            <Link to="/works">
              Works
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/ideas" >
              Ideas
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;