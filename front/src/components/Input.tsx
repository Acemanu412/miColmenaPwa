import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: any) => void;
}

export default function Input({
  placeholder,
  type,
  name,
  value,
  onChange,
<<<<<<< HEAD
  required
}: IInputProps) {
=======
  required = "",
}: InputProps) {
>>>>>>> b52dff81008aebd8f07a92cb13aee5cc3371ac17
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
<<<<<<< HEAD
      required={required}
=======
      // {required}
>>>>>>> b52dff81008aebd8f07a92cb13aee5cc3371ac17
    />
  );
}
