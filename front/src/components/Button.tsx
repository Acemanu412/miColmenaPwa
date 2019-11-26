import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button(props: IButtonProps) {
  return <button {...props}>{props.text}</button>;
}
