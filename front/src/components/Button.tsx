import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, type }: IButtonProps) {
  return <button type={type}>{text}</button>;
}
