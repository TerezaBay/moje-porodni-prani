import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink, formTexts } from '../../../texts/formTexts.js';
import './style.css';

const Form11End = () => (
  <main className="form_main">
    <div className="form_container">
      <Title titleClass="title-div" titleText={formTexts[1].title} />
      <div className="text">{formTexts[1].text}</div>
    </div>
  </main>
);

export default Form11End;
