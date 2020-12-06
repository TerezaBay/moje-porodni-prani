import React from 'react';
import './style.css';

const Title = ({ titleClass, titleText }) => (
  <div className={titleClass}>
    <h2 className="title-text">{titleText}</h2>
  </div>
);

export default Title;
