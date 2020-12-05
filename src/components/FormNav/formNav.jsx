import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

import { formTitleLink } from '../../texts/formTexts.js';

const FormNav = () => (
  <nav className="form-nav">
    <ul className="form-nav_links">
      {formTitleLink.slice(0, 10).map((titleLink, i) => (
        <li key={i}>
          <NavLink exact to={titleLink.link} activeClassName="form-nav--selected">{titleLink.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default FormNav;
