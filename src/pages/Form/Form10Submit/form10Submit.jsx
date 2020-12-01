import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import './style.css';
import { useFormContext, isFormValid } from '../../../utils/formContext.jsx';

const Form10Submit = () => {
  const { formState } = useFormContext();

  const handleSubmit = (e) => {
    console.log('isFormValid', isFormValid(formState)); // TODO remove when this function is finished
  };

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
