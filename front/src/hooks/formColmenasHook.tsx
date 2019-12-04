import { useState } from "react";

export const useFormColmenas = (callback: any) => {
  const [inputsSalientesIntervenciones, setInputsIntervenciones] = useState({});

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };

  const handleInputIntervencionesChange = (event: any) => {
    let { name, checked } = event.target;
    setInputsIntervenciones((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: checked,
    }));
  };


  return {
    handleInputIntervencionesChange,
    handleSubmit,
    inputsSalientesIntervenciones,
  };
};