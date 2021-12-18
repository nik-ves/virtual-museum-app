import { useState } from "react";

const useEdit = (value) => {
  const [enteredValue, setEnteredValue] = useState(value);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const hasError = enteredValue.trim() <= 3;

  return {
    value: enteredValue,
    valueChangeHandler,
    hasError,
  };
};

export default useEdit;
