import React from 'react';
import Question from '../../../components/Question/question.jsx';
import TextArea from '../../../components/TextArea/textArea.jsx';
import Title from '../../../components/Title/title.jsx';
import { formQuest, formTitleLink } from '../../../texts/formTexts.js';
import { useFormContext, isFormValid } from '../../../utils/formContext.jsx';

const Form10Submit = () => {
  // const { formState } = useFormContext();
  // const formJSON = JSON.stringify(formState);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formJSON);
  //   console.log('isFormValid', isFormValid(formState)); // TODO remove when this function is finished
  // };

  // const handleChange = () => {
  //   console.log(formJSON);
  // };

  return (
    <main className="form_main">
      <Title titleClass="title-div" titleText={formTitleLink[9].title} />
      <form className="form">
        {formQuest.slice(22, 23).map((question, i) => (
          <Question key={i} quest={question} />
        ))}
      </form>

      {/* <form
        className="form"
        method="POST"
        action="https://api.porodni-prani.cz/pdf"
        target="_self"
        // onSubmit={handleSubmit}
      >
        <input name="type" type="hidden" value="json" />
        <input name="root" type="hidden" value="json" />
        <textarea
          name="data"
          type="text"
          value={formJSON}
          onChange={() => readOnly}
          rows="10"
          cols="60"
        />
        <br/>
        <button type="submit">Sestavit porodní přání</button>
      </form> */}
    </main>
  );
};

export default Form10Submit;
