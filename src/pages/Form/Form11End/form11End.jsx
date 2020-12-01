import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import {
  formQuest,
  formTitleLink,
  formTexts,
} from '../../../texts/formTexts.js';
import '../style.css';

const Form11End = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTexts[1].title} />
    <div className="formtext_container">
      <div className="formtext">
        {formTexts[1].text.map((formText, i) => (
          <p key={i}>{formText}</p>
        ))}
      </div>
    </div>
  </main>
);

export default Form11End;
