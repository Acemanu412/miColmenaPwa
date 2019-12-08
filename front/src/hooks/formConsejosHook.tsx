import { useState } from "react";

// ponerle un nombre unico
export const useForm = (callback: any, initialObjectIntervenciones: any,
  initialObjectAlimento: any, initialObjectCosecha: any) => {
  const [inputsSalientesIntervenciones, setInputsIntervenciones] = useState(initialObjectIntervenciones);
  const [inputsSalientesAlimento, setInputsAlimento] = useState(initialObjectAlimento);
  const [inputsSalientesCosecha, setInputsCosecha] = useState(initialObjectCosecha);

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    return await callback();
  };

  const handleInputIntervencionesChange = (event: any) => {
    const { name, checked } = event.target;
    setInputsIntervenciones((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: checked,
    }));
  };

  const handleInputAlimentoChange = (event: any) => {
    const { name, checked } = event.target;
    setInputsAlimento((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: checked,
    }));
  };

  const handleInputCosechaChange = (event: any) => {
    const { name, value } = event.target;
    setInputsCosecha((inputsEntrantes: any) => ({
      ...inputsEntrantes,
      [name]: value,
    }));
  };

  return {
    handleInputAlimentoChange,
    handleInputCosechaChange,
    handleInputIntervencionesChange,
    handleSubmit,
    inputsSalientesAlimento,
    inputsSalientesCosecha,
    inputsSalientesIntervenciones,
  };
};
