import React, { useState } from 'react';
import './style.css';

import Checkbox from '../../components/Checkbox/checkbox.jsx';
import FormNav from '../../components/Checkbox/checkbox.jsx';

import { formTitle } from '../../texts/formTexts.js';
import { formTexts } from '../../texts/formTexts.js';

const Question = () => {
  const [checked, setChecked] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [noPreviousChecked, setNoPreviousChecked] = useState(false);

  const handleChange = (value, i) => {
    const newChecked = [...checked];
    newChecked[i] = value;
    setChecked(newChecked);
  };

  const handleChangeNoPrevious = (value) => {
    setNoPreviousChecked(value);
    setDisabled(!disabled);
    if (value) {
      setChecked([]);
    }
  };

  return (
    <div className="quest">
      <h3 className="quest_title">{formTexts[1].quest}</h3>
      {formTexts[1].answers.map((answer, i) => (
        <Checkbox
          disabled={disabled}
          func={(value) => handleChange(value, i)}
          value={!!checked[i]}
          text={answer}
        />
      ))}
      <Checkbox
        disabled={false}
        func={handleChangeNoPrevious}
        value={noPreviousChecked}
        text={formTexts[0].textDisabled}
      />
    </div>
  );
};

const Form = () => (
  <>
    <FormNav />
    <main className="form">
      <form action="">
        <Question />
      </form>
    </main>
  </>
);

export default Form;
