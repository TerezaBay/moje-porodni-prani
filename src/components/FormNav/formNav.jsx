import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { formTitleLink } from '../../texts/formTexts.js';

const FormNav = () => (
  <nav className="form-nav">
    <ul className="form-nav_links">
      <li>
        {formTitleLink.map((i, titleLink) => (
          <Link key={i} to={titleLink.link}>
            {titleLink.title}
          </Link>
        ))}
      </li>
    </ul>
  </nav>
);

export default FormNav;
