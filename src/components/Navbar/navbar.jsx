import React, { useState, useEffect } from 'react';
import './style.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import NavbarBtn from '../NavbarBtn/index.jsx';
import { home } from '../../texts/homeTexts.js';
import { links } from '../../links.js';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 600 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  // musí se donastavit, aby fungovalo jen pro první stranu

  const scrollToTop = () => window.scrollTo(0, 0);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleClickScroll = () => {
    setMenuIsOpen(!menuIsOpen);
    scrollToTop();
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav
      id="navbar"
      className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}
    >
      <div className="navbar_logo">
        <Link onClick={scrollToTop} to={links[0].url}>
          {home.logo}
        </Link>
      </div>

      <div className="navbar_container">
        <NavbarBtn
          btnClass={menuIsOpen ? 'nav-btn nav-btn--open' : 'nav-btn'}
          handleClick={handleClick}
        />

        <ul
          className={
            menuIsOpen || !isMobile ? 'navbar_links' : 'navbar_links--closed'
          }
        >
          {links.map((link, i) => (
            <li key={i}>
              <Link className="navbar_link" to={link.url} onClick={handleClickScroll}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
