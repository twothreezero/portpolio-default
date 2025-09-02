import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import Img from '../img/logo.png'
import './Header.css';


function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxShrinkScroll = 200;
      const value = Math.min(scrollY / maxShrinkScroll, 1);
      document.documentElement.style.setProperty('--shrink', value);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <img className="logo" src={Img} alt="logo" />
          <div className="nav__title">
            PORTPOLIO
          </div>
        </Link>
        <ul className='nav__list'>
          <Link to="/about" className="nav__item">
            <li>ABOUT</li>
          </Link>
          <Link to="/careers" className="nav__item">
            <li>CAREERS</li>
          </Link>
          <Link to="/project" className="nav__item">
            <li>PROJECT</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;