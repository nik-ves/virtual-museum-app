import { useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const inputValueReset = () => {
    setInputValue('');
  }

  return {
    value: inputValue,
    valueChangeHandler: inputValueChangeHandler,
    resetValue: inputValueReset
  }

}

export default useInput;