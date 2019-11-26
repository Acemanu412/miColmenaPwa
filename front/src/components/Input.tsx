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
<<<<<<< HEAD
  required
}: IInputProps) {
=======
  required = "",
}: InputProps) {
>>>>>>> b52dff81008aebd8f07a92cb13aee5cc3371ac17
=======
  required
}: IInputProps) {
>>>>>>> fd71c8ddf5e9f47789ff9de83d095dbddbda6262
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
<<<<<<< HEAD
<<<<<<< HEAD
      required={required}
=======
      // {required}
>>>>>>> b52dff81008aebd8f07a92cb13aee5cc3371ac17
=======
      required={required}
>>>>>>> fd71c8ddf5e9f47789ff9de83d095dbddbda6262
    />
  );
}
