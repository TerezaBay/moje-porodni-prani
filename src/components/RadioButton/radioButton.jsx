import React from 'react';
import './style.css';

const RadioButton = ({ name, func, value, text, checked }) => (
  <div className="radio_button">
    <label className="radio_button_label">
      <input
        type="radio"
        name={name}
        onChange={(e) => {
          if (e.target.checked) {
            func(e.target.value);
          }
        }}
        value={value}
        checked={checked}
      />
      {text}
    </label>
  </div>
);

export default RadioButton;
