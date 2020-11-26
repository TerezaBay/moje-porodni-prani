import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Mamé dva typy buttonů, default a transparent
const StyledLink = ({ text, url, type = 'default' }) => (
  <div className="styled_link">
    <Link to={url} className={type}>
      {text}
    </Link>
  </div>
);

export default StyledLink;
