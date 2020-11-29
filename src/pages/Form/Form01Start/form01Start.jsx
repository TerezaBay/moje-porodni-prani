import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formTexts, formTitleLink } from '../../../texts/formTexts.js';
import './style.css';

const Form01Start = () => (
  <main className="form_main">
    <div className="form_container">
      <Title titleClass="title-div" titleText={formTexts[0].title} />
      <div className="text">{formTexts[0].text}</div>
    </div>
  </main>
);

export default Form01Start;
