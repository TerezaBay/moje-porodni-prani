import React from 'react';
import './style.css';
import StyledLink from '../StyledLink/index.jsx';
import { home } from '../../texts/homeTexts.js';
import { links } from '../../links.js';

const Header = ({}) => (
  <header id="header" className="header_homepage">
    <div className="video_wrapper">
      <video loop autoPlay muted>
        <source src="assets/main/header_bg_video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="header_nav">
      <div className="header_logo">{home.logo}</div>
      <div className="header_menu">
        <ul className="header_menu-buttons">
          <li>
            <StyledLink
              text={links[1].name}
              url={links[1].url}
              type="transparent"
            />
          </li>
          <li>
            <StyledLink
              text={links[2].name}
              url={links[2].url}
              type="transparent"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="header_content">
      <h1 className="header_title">{home.title}</h1>
      <p className="header_title-text">{home.titleText}</p>
      <StyledLink text={home.button3Text} url={links[1].url} />
    </div>
  </header>
);

export default Header;
