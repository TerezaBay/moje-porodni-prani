import React, { createContext, useContext, useState, useMemo } from "react";
import { db } from "../db.js";
import { formQuest } from "../texts/formTexts.js";

const initialFormState = {
  docId: null,
  form: formQuest.map((question) => {
    const result = { type: question.type };
    switch (question.type) {
      case "checkbox":
        result.value = Array(question.answers.length).fill(false);
        result.noPrevious = false;
        break;
      case "radioButton":
        result.value = null;
        break;
      case "input":
        result.value = Array(question.answers.length).fill(null);
        break;
      case "textArea":
      case "longTextArea":
        result.value = [null];
        break;
    }
    return result;
  }),
};

const createFormContextValue = ({ formState, setFormState }) => {
  
  return {
    formState,
    setFormState: (value, i) => {
      let newState = {
        ...formState,
      };
      if (typeof i === "string") {
        switch (i) {
          case "docId":
            newState.docId = value;
            break;
          case "all":
            newState = value;
            break;
        }
      } else {
        newState.form = [...formState.form];
        newState.form[i] = value;
      }

      // console.log(newState)
      setFormState(newState);
    },
  };
};

const FormContext = createContext(
  createFormContextValue({
    formState: initialFormState,
    setFormState: () =>
      console.error("You are using FormContext without FormContextProvider!"),
  })
);

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialFormState);

  const formContextValue = useMemo(() => {
    return createFormContextValue({ formState, setFormState });
  }, [formState, setFormState]);

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};

export const isFormValid = (formState) => {
  if (formState.form.length !== formQuest.length) {
    return false;
  }
  // filter only invalid questions
  const invalidQuestionList = formState.form.filter((quest, i) => {
    if (!!formQuest[i].isOptional) {
      return false; // optional question no need to validate anymore
    }

    if (quest === null) {
      return true; // mandatory question is invalid
    }

    const questOptionCount = formQuest[i].answers.length;

    // validation for each question type
    switch (quest.type) {
      case "checkbox":
        return !isCheckboxQuestionValid(quest, i);
      case "input":
        return quest.value.length !== questOptionCount; // all inputs are filled
      case "textArea":
        return quest.value.length !== questOptionCount; // same as "input"
      case "longTextArea":
        return quest.value.length !== questOptionCount; // same as "input"
      case "radioButton":
        return !quest.value; // radio option is checked
    }

    return false; // question is valid - no need to keep in invalid questions array
  });

  // form is valid, when no quesiton is invalid
  return invalidQuestionList.length === 0;
};

const isCheckboxQuestionValid = (quest, i) => {
  const answers = formQuest[i].answers;
  const checkedValuesCount = quest.value.filter((item) => !!item).length;

  // When requiredCheckedAll is true, all answers should be checked (true)
  if (
    !!formQuest[i].requiredCheckedAll &&
    checkedValuesCount !== answers.length
  ) {
    return false;
  }

  // When noPrevious is checked, at least one option from other values needs to be checked
  if (!quest.noPrevious && checkedValuesCount === 0) {
    return false;
  }

  return true;
};
