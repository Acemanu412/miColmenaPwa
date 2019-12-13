import { useState } from "react";

//React Hook para manejar la mayoría de los formularios de la aplicación. Recibe por parámetro el estado inicial de cada campo y 
// una función callback a ejecutar en el submit.

export const useForm = (callback: any, initialObject) => {
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
