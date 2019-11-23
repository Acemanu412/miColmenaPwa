import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
};

export default function Input({ placeholder, type }: InputProps) {
  return <input type="text" placeholder={placeholder} />;
}
