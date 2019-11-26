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
  required
}: IInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
