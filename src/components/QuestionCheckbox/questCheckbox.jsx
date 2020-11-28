import React, { useState } from 'react';
import './style.css';

import Checkbox from '../../components/Checkbox/checkbox.jsx';

const QuestionCheckbox = ({ quest }) => {
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
      <Checkbox
        disabled={false}
        func={handleChangeNoPrevious}
        value={noPreviousChecked}
        text={quest.textDisabled}
      />
    </>
  );
};

export default QuestionCheckbox;
