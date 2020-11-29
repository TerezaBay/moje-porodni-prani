import React, { useState } from 'react';
import './style.css';

import Checkbox from '../../components/Checkbox/checkbox.jsx';

const QuestionCheckbox = ({ quest }) => {
  const [checked, setChecked] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [noPreviousChecked, setNoPreviousChecked] = useState(false);

  const handleChange = (value, i) => {
    if (
      value &&
      quest.maxChecked &&
      checked.filter((item) => item).length >= quest.maxChecked
    ) {
      alert(`Je možné zaškrtnout pouze ${quest.maxChecked} možnosti.`);
      return;
    }
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
    <>
      {quest.answers.map((answer, i) => (
        <Checkbox
          key={i}
          disabled={disabled}
          func={(value) => handleChange(value, i)}
          value={!!checked[i]}
          text={answer}
        />
      ))}
      {quest.textDisabled ? (
        <Checkbox
          disabled={false}
          func={handleChangeNoPrevious}
          value={noPreviousChecked}
          text={quest.textDisabled}
        />
      ) : null}
    </>
  );
};

export default QuestionCheckbox;
