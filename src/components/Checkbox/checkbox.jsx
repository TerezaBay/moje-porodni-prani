import React from 'react';
import './style.css';

const Checkbox = ({ disabled, func, value, text }) => (
  <label className="checkbox_label">
    <input
      type="checkbox"
      disabled={disabled}
      onChange={(e) => func(e.target.checked)}
      checked={value}
    />
    {text}
  </label>
);

export default Checkbox;
