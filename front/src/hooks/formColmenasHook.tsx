import { useState } from "react";

export const useFormColmenas = (callback: any, initialObject) => {
  const [inputsSalientesIntervenciones, setInputsIntervenciones] = useState({});

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
  const handleInputIntervencionesChange = (event: any) => {
    const { name, checked } = event.target;
    setInputsIntervenciones((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: checked,
    }));
  };

  return {
    handleInputChange,
    inputsSalientes,
    handleInputIntervencionesChange,
    handleSubmit,
    inputsSalientesIntervenciones,
  };
};
