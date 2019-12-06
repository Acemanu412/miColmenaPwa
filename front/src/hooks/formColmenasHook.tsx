import { useState } from "react";

export const useFormColmenas = (callback: any, initialObject) => {
  const [inputsSalientes, setInputs] = useState(initialObject);
  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };
  const handleInputChange = (event: any) => {
    let { name, value, checked, type } = event.target;
    type === "checkbox" && (value = checked);
    setInputs((inputsEntrantes: any) => ({
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
