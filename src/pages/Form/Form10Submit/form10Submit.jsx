import React from 'react';
import { Link } from 'react-router-dom';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { routesForm } from '../../../links.js';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import { useFormContext, isFormValid } from '../../../utils/formContext.jsx';

const Form10Submit = () => {
  const { formState } = useFormContext();
  console.log('isFormValid', isFormValid(formState)); // TODO remove when this function is finished

  const handleClick = (e) => {
    isFormValid(formState)
      ? null
      : alert('Formulář nelze odeslat. Prosím vyplňte všechna povinná pole.');
  };

  return (
    <main className="form_main">
      <Title titleClass="title-div" titleText={formTitleLink[9].title} />
      <form className="form">
        {formQuest.slice(22, 23).map((question, i) => (
          <Question key={i} quest={question} />
        ))}
        <div className="form_submit_container">
          <Link
            className="form_submit_link"
            to={
              isFormValid(formState)
                ? routesForm[10].path
                : '/formhome/form10Submit'
            }
          >
            <button
              className={
                isFormValid(formState)
                  ? 'form_submit_button form_submit_button--active'
                  : 'form_submit_button form_submit_button--disabled'
              }
              onClick={handleClick}
            >
              Sestavit porodní přání
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Form10Submit;
