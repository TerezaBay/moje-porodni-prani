import React from 'react';
import './style.css';

import { formTitle } from '../../texts/formTexts.js';
// import { formTexts } from '../../texts/formTexts';

const FormNav = () => (
  <nav className="form-nav">
    <ul className="form-nav_links">
      <li>
        {formTitle.map((text) => (
          <a href="url">{text}</a>
        ))}
      </li>
    </ul>
  </nav>
);

const Form = () => (
  <>
    <FormNav />

    <main className="form">
      <div>Form</div>
    </main>
  </>
);

export default Form;
