import React from 'react';
import './style.css';

const Service = ({ icon, label, text }) => (
  <div className="service">
    <div
      className="service_img"
      style={{
        backgroundImage: `url(../assets/icons/${icon}.svg)`,
      }}
    ></div>
    <div className="service_content">
      <h3 className="service_name">{label}</h3>
      <p className="service_text">{text}</p>
    </div>
  </div>
);

export default Service;
