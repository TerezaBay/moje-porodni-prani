import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import './style.css';

const Form04PreLabour = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTitleLink[3].title} />
    <form className="form">
      {formQuest.slice(6, 9).map((question, i) => (
        <Question key={i} quest={question} />
      ))}
    </form>
  </main>
);

export default Form04PreLabour;
