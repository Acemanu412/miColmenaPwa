import React from "react";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text,
                                 ...restProps }: IButtonProps) {
  return <button {...restProps}>{text}</button>;
}
