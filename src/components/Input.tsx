import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
};

export default function Input({ type, placeholder, name }: InputProps) {
  return <input name={name} type={type} placeholder={placeholder} />;
}
