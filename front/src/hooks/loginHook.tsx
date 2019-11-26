import { useState } from "react";

export const useSignUpForm = (callback: any) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event: any) => {
    event.persist();
    setInputs((inputss) => ({
      ...inputss,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputs,
  };
};
