import React from 'react';
import './style.css';

const Checkbox = ({ disabled, func, value, text }) => (
  <div className="checkbox">
    <label className="checkbox_label">
      <input
        type="checkbox"
        disabled={disabled}
        onChange={(e) => func(e.target.checked)}
        checked={value}
      />
      {text}
    </label>
  </div>
);

export default Checkbox;
