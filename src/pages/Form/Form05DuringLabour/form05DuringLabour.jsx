import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import './style.css';

const Form05DuringLabour = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTitleLink[4].title} />
    <form className="form">
      {formQuest.slice(9, 11).map((question, i) => (
        <Question key={i} quest={question} />
      ))}
    </form>
  </main>
);

export default Form05DuringLabour;
