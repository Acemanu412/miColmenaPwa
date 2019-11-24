import React from "react";

type ButtonProps = {
  text: string;
  type: string;
};

export default function Button({ text, type }: ButtonProps) {
  switch (type) {
    case "submit":
      return <button type="submit">{text}</button>;
    case "button":
      return <button type="button">{text}</button>;
    case "reset":
      return <button type="reset">{text}</button>;
    default:
      return <button type={undefined}>{text}</button>;
  }
}
