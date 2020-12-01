import React, { useState } from 'react';
import './style.css';

import Checkbox from '../../components/Checkbox/checkbox.jsx';
import { useFormContext } from '../../utils/formContext.jsx';

const QuestionCheckbox = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const [disabled, setDisabled] = useState(false);

  const [noPreviousChecked, setNoPreviousChecked] = useState(false);

  const handleChange = (value, i) => {
    if (
      value &&
      quest.maxChecked &&
      formState[quest.id]?.value.filter((item) => item).length >=
        quest.maxChecked
    ) {
      alert(`Je možné zaškrtnout pouze ${quest.maxChecked} možnosti.`);
      return;
    }

    const newChecked = [...(formState[quest.id]?.value || [])];
    newChecked[i] = value;

    setFormState({ type: quest.type, value: newChecked }, quest.id);
  };

  const handleChangeNoPrevious = (value) => {
    setNoPreviousChecked(value);
    setDisabled(!disabled);
    if (value) {
      setFormState({ type: quest.type, value: [] }, quest.id);
    }
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <Checkbox
          key={i}
          disabled={disabled}
          func={(value) => handleChange(value, i)}
          value={!!formState[quest.id]?.value[i]}
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
