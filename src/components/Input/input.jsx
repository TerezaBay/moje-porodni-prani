import React from 'react';
import './style.css';

const Input = ({ input, value, func }) => {
  let text = '';
  let type = 'text';
  if (typeof input === 'string') {
    text = input;
  } else {
    text = input.text;
    type = input.type;
  }

  return (
    <div className="input">
      <label className="input_label">
        {text}
        <input
          type={type}
          maxLength="30"
          value={value}
          onChange={(e) => func(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Input;
