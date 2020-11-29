import React from 'react';
import './style.css';

const RadioButton = ({ name, func, value, text }) => (
  <div className="radio_button">
    <label className="radio_button_label">
      <input
        type="radio"
        name={name}
        onChange={(e) => func(e.target.checked)}
        checked={value}
        />
        {text}
    </label>
  </div>
);

export default RadioButton;
