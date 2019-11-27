import { useState } from "react";

export const useSignUpForm = (callback: any, initialObject) => {
  const [inputsSalientes, setInputs] = useState(initialObject);

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event: any) => {
    event.persist();
    setInputs((inputsEntrantes) => ({
      ...inputsEntrantes,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputsSalientes, 
  };
};
