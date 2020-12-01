import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formTexts, formTitleLink } from '../../../texts/formTexts.js';
import '../style.css';

const Form01Start = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTexts[0].title} />
    <div className="formtext_container">
      <div className="formtext">
        {formTexts[0].text.map((formText, i) => (
          <p key={i}>{formText}</p>
        ))}
      </div>
    </div>
  </main>
);

export default Form01Start;
