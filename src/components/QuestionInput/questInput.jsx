import React from "react";
import Input from "../Input/input";
import "./style.css";

import { useFormContext } from "../../utils/formContext.jsx";

const QuestionInput = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const handleChange = (value, i) => {
    const newAnswered = [...(formState.form[quest.id]?.value || [])];
    newAnswered[i] = value;

    setFormState({ type: quest.type, value: newAnswered }, quest.id);
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <Input
          key={i}
          input={answer}
          value={formState.form[quest.id]?.value[i] || ""}
          func={(value) => handleChange(value, i)}
        />
      ))}
    </>
  );
};

export default QuestionInput;
