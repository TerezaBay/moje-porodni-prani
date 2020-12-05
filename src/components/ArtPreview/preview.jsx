import React from 'react';
import './style.css';
import StyledLink from '../StyledLink/styledLink.jsx';

const ArtPreview = ({ img, title, text, url }) => (
  <div className="preview">
    <div
      className="preview_img"
      style={{ backgroundImage: `url(/assets/articles/${img}.jpg)` }}
    ></div>
    <div className="preview_content">
      <h3 className="preview_name">{title}</h3>
      <p className="preview_text">{text}</p>
      <StyledLink text="Číst dál" url={url} type="yellow" />
    </div>
  </div>
);

export default ArtPreview;
