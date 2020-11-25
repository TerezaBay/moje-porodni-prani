import React from 'react';
import './style.css';

const NavbarBtn = ({ btnClass, handleClick }) => (
  <button id="nav-btn" className={btnClass} onClick={handleClick}>
    {' '}
    <span></span>
    <span></span>
    <span></span>
  </button>
);

export default NavbarBtn;
