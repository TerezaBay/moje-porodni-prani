import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import '../style.css';

const Form09Preferences = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTitleLink[8].title} />
    <form className="form">
      {formQuest.slice(21, 22).map((question, i) => (
        <Question key={i} quest={question} />
      ))}
    </form>
  </main>
);

export default Form09Preferences;
