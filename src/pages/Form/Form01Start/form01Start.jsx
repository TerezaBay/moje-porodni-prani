import React from 'react';
import Question from '../../../components/Question/question.jsx';
import Title from '../../../components/Title/title.jsx';
import { formTexts, formTitleLink } from '../../../texts/formTexts.js';
import '../style.css';
import { useFormContext } from '../../../utils/formContext.jsx';
import { Link } from 'react-router-dom';

const Form01Start = () => {
  const { formState, setFormState } = useFormContext();

  return (
    <main className="form_main">
      <Title titleClass="title-div" titleText={formTexts[0].title} />
      <div className="formtext_container">
        <div className="formtext">
          <p>{formTexts[0].text[0]}</p>
          <p>{formTexts[0].text[1]}</p>
          <p className="link_firebase">
            <Link
              to={{ pathname: '/formhome', search: '?id=' + formState.docId }}
            >
              Trvalý odkaz
            </Link>
          </p>
          <p>{formTexts[0].text[2]}</p>
          <p>{formTexts[0].text[3]}</p>
          <p>{formTexts[0].text[4]}</p>
        </div>
      </div>
    </main>
  );
};

export default Form01Start;
