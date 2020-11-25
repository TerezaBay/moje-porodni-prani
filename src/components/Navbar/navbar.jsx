import React, { useState, useEffect } from 'react';
import './style.css';
import { useMediaQuery } from 'react-responsive';
import NavbarBtn from '../NavbarBtn/index.jsx';
import { home } from '../../texts/homeTexts.js';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 600 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  // musí se donastavit, aby fungovalo jen pro první stranu

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleClick = () => setMenuIsOpen(!menuIsOpen);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  // když použiji useMediaQuery, tak mi React bude sám hlídat změnu šířky okna prohlížeče a rerenderuje to, pokud změna nastane - nemusím použít ani stav, ani useEffect - je to boží!

  // const [isMobile, setIsMobile] = useState(true);

  // useEffect(() => {
  //   window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  // }, []);

  return (
    <nav
      id="navbar"
      className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}
    >
      <div className="navbar_logo">
        <a href={home.logoLink}>{home.logo}</a>
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
          {home.footerLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} onClick={handleClick}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
