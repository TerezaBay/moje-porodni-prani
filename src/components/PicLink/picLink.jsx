import React, { useState } from 'react';
import './style.css';

export const PicLink = ({ title, text, url, img, type }) => {
  const backgroundUrl = `url(/assets/links/${img})`;
  const backgroundGradient = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))`;
  const backgroundHoverGradient = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const [backgroundImage, setBackgroundImage] = useState(
    `${backgroundGradient}, ${backgroundUrl}`,
  );

  const handleMouseEnter = () => {
    setBackgroundImage(`${backgroundHoverGradient}, ${backgroundUrl}`);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(`${backgroundGradient}, ${backgroundUrl}`);
  };

  return (
    <a
      className={'picLink ' + (type ? 'picLink--' + type : '')}
      href={url}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="picLink_content">
        <p className="picLink_name">{title}</p>
        <p className="picLink_text">{text}</p>
      </div>
    </a>
  );
};

export default PicLink;
