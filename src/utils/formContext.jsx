import React, { createContext, useContext, useState, useMemo } from 'react';

// { type: "checkbox", value: [true] }
// { type: "input", value: ["bordel"] }

const initialFormState = [];

const FormContext = createContext(
  createFormContextValue({
    formState: initialFormState,
    setFormState: () =>
      console.error('You are using FormContext without FormContextProvider!'),
  })
);

export function useFormContext() {
  return useContext(FormContext);
}

export function FormContextProvider({ children }) {
  const [formState, setFormState] = useState(initialFormState);

  const formContextValue = useMemo(() => {
    return createFormContextValue({ formState, setFormState });
  }, [formState, setFormState]);

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

function createFormContextValue({ formState, setFormState }) {
  return {
    formState,
    setFormState: (value, i) => {
      const newValue = [...formState];

      newValue[i] = value;

      console.log(newValue);

      setFormState(newValue);
    },
  };
}
