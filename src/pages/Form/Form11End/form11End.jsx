import React, { useEffect, useRef } from 'react';
import Title from '../../../components/Title/title.jsx';
import { formTexts } from '../../../texts/formTexts.js';
import { useFormContext } from '../../../utils/formContext.jsx';
import '../style.css';

const Form11End = () => {
  const { formState } = useFormContext();
  const formJSON = JSON.stringify(formState.form);
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.submit();
  }, []);

  return (
    <main className="form_main">
      <Title titleClass="title-div" titleText={formTexts[1].title} />
      <div className="formtext_container">
        <div className="formtext">
          {formTexts[1].text.map((formText, i) => (
            <p key={i}>{formText}</p>
          ))}
        </div>
      </div>

      <form
        className="form"
        method="POST"
        action="https://api.porodni-prani.cz/pdf"
        target="_self"
        ref={formRef}
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
          style={{ display: 'none' }}
        />
      </form>
    </main>
  );
};

export default Form11End;
