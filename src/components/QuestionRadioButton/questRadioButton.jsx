import React from 'react';
import './style.css';

import RadioButton from '../RadioButton/radioButton';
import { useFormContext } from '../../utils/formContext.jsx';

const QuestionRadioButton = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (value, i) => {
    const newChecked = [...(formState[quest.id]?.value || [])];
    newChecked[i] = value;

    setFormState({ type: quest.type, value: newChecked }, quest.id);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <RadioButton
          key={i}
          name={`radio-${quest.id}`}
          func={(value) => handleChange(value, i)}
          value={formState[quest.id]?.value[i] || ''}
          text={answer}
        />
      ))}
    </>
  );
};

export default QuestionRadioButton;
