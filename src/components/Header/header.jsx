import React from 'react';
import './style.css';
import StyledLink from '../StyledLink/index.jsx';
import { home } from '../../texts/homeTexts.js';

const Header = ({}) => (
  <header id="header" className="header_homepage">
    <div className="header_nav">
      <div className="header_logo">{home.logo}</div>
      <div className="header_menu">
        <ul className="header_menu-buttons">
          <li>
            <StyledLink
              text={home.button1Text}
              url={home.button1Url}
              type="transparent"
            />
          </li>
          <li>
            <StyledLink
              text={home.button2Text}
              url={home.button2Url}
              type="transparent"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="header_content">
      <h1 className="header_title">{home.title}</h1>
      <p className="header_title-text">{home.titleText}</p>
      <StyledLink text={home.button3Text} />
    </div>
  </header>
);

export default Header;
