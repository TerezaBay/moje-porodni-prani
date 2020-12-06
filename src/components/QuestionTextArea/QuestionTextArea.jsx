import React from 'react';
import TextArea from '../TextArea/textArea';

import { useFormContext } from '../../utils/formContext.jsx';

const QuestionTextArea = ({ quest }) => {
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
          extraText={false}
          classN="textArea"
          value={formState.form[quest.id]?.value[i] || ''}
          func={(value) => handleChange(value, i)}
          maxLength={150}
        />
      ))}
    </>
  );
};

export default QuestionTextArea;
