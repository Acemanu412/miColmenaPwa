import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  style?: any;
};

export default function Input({ type, placeholder, name }: InputProps) {
  return (
    <input
      style={{
        outline: "none",
        borderBottom: "2px solid white",
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        margin: "1cm",
        color: "white",
        backgroundColor: "transparent",
        display: "flex"
      }}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}
