import { useState } from "react";

export const useForm = (callback: any, initialObject) => {
  const [inputsSalientes, setInputs] = useState(initialObject);

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event: any) => {
    // event.persist();     usar event.persist o guardar los valores para tenerlos dentro de setInputs
    const { name, value } = event.target;
    setInputs((inputsEntrantes) => ({
      ...inputsEntrantes,
      [name]: value,
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputsSalientes,
  };
};
