import React from 'react';
import './style.css';

const TextArea = ({ text, value, func, maxLength }) => (
  <div className="text_area-div">
    <label className="textArea_label">
      {text}
      <textarea
        className="text_area"
        value={value}
        onChange={(e) => func(e.target.value)}
        cols="50"
        rows="4"
        maxLength={maxLength}
      ></textarea>
    </label>
  </div>
);

export default TextArea;
