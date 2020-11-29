import React, { useState } from 'react';
import TextArea from '../TextArea/textArea';
import './style.css';

const QuestionTextArea = ({ quest }) => {
  const [answered, setAnswered] = useState(() =>
    Array(quest.answers.length).fill(''),
  );

  const handleChange = (value, i) => {
    const newAnswered = [...answered];
    newAnswered[i] = value;
    setAnswered(newAnswered);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <TextArea
          key={i}
          text={answer}
          value={answered[i]}
          func={(value) => handleChange(value, i)}
          maxLength={150}
        />
      ))}
    </>
  );
};

export default QuestionTextArea;
