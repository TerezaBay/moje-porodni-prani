import React from 'react';
import './style.css';

const TextArea = ({ text, extraText, classN, value, func, maxLength }) => (
  <div className="text_area">
    <label className="text_area_label">
      {text}
      {extraText ? <p className="extra_text">{extraText}</p> : null}
      <textarea
        className={classN}
        value={value}
        onChange={(e) => func(e.target.value)}
        maxLength={maxLength}
      ></textarea>
    </label>
  </div>
);

export default TextArea;
