import { useState } from "react";

export const useForm = (callback: any, initialObject) => {
  // const [inputsSalientesSalud, setInputsSalud] = useState({});

  const [inputsSalientes, setInputs] = useState(initialObject);
  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };
  // const handleInputSaludChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setInputsSalud((inputsEntrantes: any) => ({
  //     ...inputsEntrantes,
  //     [name]: value,
  //   }));
  // };
  const handleInputChange = (event: any) => {
    let { name, value, checked, type } = event.target;
    type === "checkbox" && (value = checked);
    setInputs((inputsEntrantes) => ({
      ...inputsEntrantes,
      [name]: value,
    }));
  };
  return {
    handleInputChange,
    // handleInputSaludChange,
    handleSubmit,
    inputsSalientes,
    // inputsSalientesSalud,
  };
};
