import React from 'react';
import './style.css';

const Author = ({ img, name, text }) => (
  <div className="author-div">
    <img src={img} alt={`Fotografie - ${name}`} />
    <h3 className="author_name">{name}</h3>
    <p className="author_text">{text}</p>
  </div>
);

export default Author;
