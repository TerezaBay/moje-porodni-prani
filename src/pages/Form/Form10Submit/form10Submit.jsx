import React from 'react';
import Question from '../../../components/Question/question.jsx';
import StyledLink from '../../../components/StyledLink/index.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import './style.css';

const Form10Submit = () => (
  <main className="form_main">
    <Title titleClass="title-div" titleText={formTitleLink[9].title} />
    <form className="form">
      {formQuest.slice(22, 23).map((question, i) => (
        <Question key={i} quest={question} />
      ))}
    <button>Sestavit porodní přání</button>
    </form>
  </main>
);

export default Form10Submit;
