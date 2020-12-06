import React from 'react';

import RadioButton from '../RadioButton/radioButton';
import { useFormContext } from '../../utils/formContext.jsx';

const QuestionRadioButton = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (value) => {
    setFormState({ type: quest.type, value: value }, quest.id);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <RadioButton
          key={i}
          name={`radio-${quest.id}`}
          func={(value) => handleChange(value)}
          value={i}
          checked={formState.form[quest.id]?.value === String(i)}
          text={answer}
        />
      ))}
    </>
  );
};

export default QuestionRadioButton;
