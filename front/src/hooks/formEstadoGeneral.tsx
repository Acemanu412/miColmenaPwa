import { useState } from "react";

export const useForm = (callback: any, initialObject) => {

  const [inputsSalientes, setInputs] = useState(initialObject);
  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };
  const handleInputChange = (event: any) => {
    let { checked, name, type, value } = event.target;
    type === "checkbox" && (value = checked);
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
