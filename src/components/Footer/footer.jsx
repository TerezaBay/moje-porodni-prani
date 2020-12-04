import React from 'react';
import './style.css';

const Footer = ({ copyrightText, creditsText }) => (
  <footer className="footer_homepage">
    <div className="footer_copyright">{copyrightText}</div>
    <div className="footer_credits">{creditsText}</div>
  </footer>
);

export default Footer;
