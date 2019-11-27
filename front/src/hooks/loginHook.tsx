import { useState } from "react";

export const useSignUpForm = (callback: any, initialObject) => {
  const [inputsSalientes, setInputs] = useState(initialObject);

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };

  const handleInputChange = (event: any) => {
    event.persist();
    setInputs((inputsEntrantes) => ({
      ...inputsEntrantes,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputsSalientes,
  };
};
