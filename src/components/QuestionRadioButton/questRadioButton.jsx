import React, { useState } from 'react';
import './style.css';

import RadioButton from '../RadioButton/radioButton';

const QuestionRadioButton = ({ quest }) => {
  const [checked, setChecked] = useState(() =>
    Array(quest.answers.length).fill(''),
  );

  const handleChange = (value, i) => {
    const newChecked = [...checked];
    newChecked[i] = value;
    setChecked(newChecked);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <RadioButton
          key={i}
          name={`radio-${quest.id}`}
          func={(value) => handleChange(value, i)}
          value={checked[i]}
          text={answer}
        />
      ))}
    </>
  );
};

export default QuestionRadioButton;
