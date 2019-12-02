import { useState } from "react";

export const useForm = (callback: any) => {
  const [inputsSalientesIntervenciones, setInputsIntervenciones] = useState({});
  const [inputsSalientesAlimento, setInputsAlimento] = useState({});
  const [inputsSalientesCosecha, setInputsCosecha] = useState({});


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

  const handleInputAlimentoChange = (event: any) => {
    let { name, checked } = event.target;
    setInputsAlimento((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: checked,
    }));
  };

  const handleInputCosechaChange = (event: any) => {
    let { name, value } = event.target;
    setInputsCosecha((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: value,
    }));
  };

  return {
    handleInputIntervencionesChange,
    handleInputAlimentoChange,
    handleInputCosechaChange,
    handleSubmit,
    inputsSalientesIntervenciones,
    inputsSalientesAlimento,
    inputsSalientesCosecha,
  };
};