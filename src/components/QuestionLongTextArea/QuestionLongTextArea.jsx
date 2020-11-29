import React from 'react';
import TextArea from '../TextArea/textArea';
import './style.css';

import { useFormContext } from '../../utils/formContext.jsx';

const QuestionLongTextArea = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (value, i) => {
    const newAnswered = [...(formState[quest.id]?.value || [])];
    newAnswered[i] = value;

    setFormState({ type: quest.type, value: newAnswered }, quest.id);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <TextArea
          key={i}
          text={answer}
          value={formState[quest.id]?.value[i] || ''}
          func={(value) => handleChange(value, i)}
          maxLength={600}
        />
      ))}
    </>
  );
};

export default QuestionLongTextArea;
