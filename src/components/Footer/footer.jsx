import React from 'react';
import './style.css';

const Footer = ({ links, copyrightText }) => (
  <footer className="footer_homepage">
    <ul className="footer_links">
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
    <div className="footer_copyright">{copyrightText}</div>
  </footer>
);

export default Footer;
