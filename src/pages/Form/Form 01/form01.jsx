import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formTexts, formTitle } from '../../../texts/formTexts.js';
import './style.css';

const Form01 = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTitle[1]} />
    <form className="form">
      {formTexts.slice(1, 4).map((question, i) => (
        <Question key={i} quest={question} />
      ))}
    </form>
  </main>
);

export default Form01;
