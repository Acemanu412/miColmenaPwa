import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange?: any;
  required?: string;
};

export default function Input({
  placeholder,
  type,
  name,
  value,
  onChange,
  required
}: InputProps) {
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
