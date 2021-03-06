import React from 'react';
import TextArea from '../TextArea/textArea';

import { useFormContext } from '../../utils/formContext.jsx';

const QuestionLongTextArea = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (value, i) => {
    const newAnswered = [...(formState.form[quest.id]?.value || [])];
    newAnswered[i] = value;

    setFormState({ type: quest.type, value: newAnswered }, quest.id);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <TextArea
          key={i}
          text={answer}
          extraText={quest.example}
          classN="longTextArea"
          value={formState.form[quest.id]?.value[i] || ''}
          func={(value) => handleChange(value, i)}
          maxLength={450}
        />
      ))}
    </>
  );
};

export default QuestionLongTextArea;
