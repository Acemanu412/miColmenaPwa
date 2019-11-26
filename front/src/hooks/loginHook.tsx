<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> dd681b7382c3ad3b75943a3eb3950bc1d1b6deb1

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
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputs
  };
};
