import React from 'react';
import './style.css';

// Mamé dva typy buttonů, default a transparent
const StyledLink = ({ text, url, type = 'default' }) => (
  <div className="styled_link">
    <a href={url} className={type}>
      {text}
    </a>
  </div>
);

export default StyledLink;
