import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import { useFormContext } from '../../../utils/formContext.jsx';
import { createFormContextValue } from '../../../utils/formContext.jsx';

import '../style.css';

const Form10Submit = () => {
  const handleSubmit = (e) => {
} 

  return (
    <main className="form_main">
      <Title titleClass="title-div" titleText={formTitleLink[9].title} />
      <form className="form" onSubmit={handleSubmit}>
        {formQuest.slice(22, 23).map((question, i) => (
          <Question key={i} quest={question} />
        ))}
        <button type="submit">Sestavit porodní přání</button>
      </form>
    </main>
  );
};

export default Form10Submit;
