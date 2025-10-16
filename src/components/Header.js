import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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