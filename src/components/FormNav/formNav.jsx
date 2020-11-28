import React from 'react';
import './style.css';

import { formTitle } from '../../texts/formTexts.js';

const FormNav = () => (
  <nav className="form-nav">
    <ul className="form-nav_links">
      <li>
        {formTitle.map((text, i) => (
          <a key={i} href="url">
            {text}
          </a>
        ))}
      </li>
    </ul>
  </nav>
);

export default FormNav;
