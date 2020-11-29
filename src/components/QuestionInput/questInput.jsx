import React, { useState } from 'react';
import Input from '../Input/input';
import './style.css';

const QuestionInput = ({ quest }) => {
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
        <Input
          key={i}
          input={answer}
          value={answered[i]}
          func={(value) => handleChange(value, i)}
        />
      ))}
    </>
  );
};

export default QuestionInput;
