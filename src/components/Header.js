import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  const lastScrollY = useRef(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${headerVisible ? 'visible' : 'hidden'}`}>
      {/* <Link to="/" className="logo"> */}
      <Link to="/" className="logo">
        leesaeyoung
      </Link>
      <nav className="nav">
        <ul className='nav__list'>
          <li className="nav__item">
            <NavLink to="/">
              Resume
            </NavLink>
          </li>
          {/* <li className="nav__item">
            <NavLink to="/works">
              Works
            </NavLink>
          </li> */}
          {/* <li className="nav__item">
            <NavLink to="/ideas" >
              Ideas
            </NavLink>
          </li> */}
          {/* <li className="nav__item">
            <NavLink to="/about">
              About
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header;