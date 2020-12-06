import React, { useState } from "react";
import "./style.css";

import Checkbox from "../../components/Checkbox/checkbox.jsx";
import { useFormContext } from "../../utils/formContext.jsx";

const QuestionCheckbox = ({ quest }) => {
  const { formState, setFormState } = useFormContext();

  const noPreviousCheckedDefault =
    formState.form[quest.id] === null
      ? false
      : formState.form[quest.id].value.length === 0;

  const [noPreviousChecked, setNoPreviousChecked] = useState(
    noPreviousCheckedDefault
  );

  const handleChange = (value, i) => {
    if (
      value &&
      quest.maxChecked &&
      formState.form[quest.id]?.value.filter((item) => item).length >=
        quest.maxChecked
    ) {
      alert(`Je možné zaškrtnout pouze ${quest.maxChecked} možnosti.`);
      return;
    }

    const newChecked = [...(formState.form[quest.id]?.value || [])];
    newChecked[i] = value;

    setFormState(
      { type: quest.type, value: newChecked, noPrevious: false },
      quest.id
    );
  };

  const handleChangeNoPrevious = (value) => {
    setNoPreviousChecked(value);

    if (value) {
      setFormState(
        { type: quest.type, value: [], noPrevious: value },
        quest.id
      );
    }
  };

  return (
    <>
      {quest.answers.map((answer, i) => (
        <Checkbox
          key={i}
          disabled={noPreviousChecked}
          func={(value) => handleChange(value, i)}
          value={!!formState.form[quest.id]?.value[i]}
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
