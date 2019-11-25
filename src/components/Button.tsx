import React from "react";

type ButtonProps = {
  text: string;
  type: string;
};

export default function Button({ text, type }: ButtonProps) {
  switch (type) {
    case "submit":
      return (
        <button
          style={{
            backgroundColor: "yellow",
            color: "black",
            width: "6cm",
            height: "1cm",
            borderRadius: "5px"
          }}
          type="submit"
        >
          {text}
        </button>
      );
    case "button":
      return (
        <button
          style={{
            backgroundColor: "yellow",
            color: "transparent",
            width: "2cm",
            height: "1cm"
          }}
          type="button"
        >
          {text}
        </button>
      );
    case "reset":
      return (
        <button
          style={{
            backgroundColor: "yellow",
            color: "transparent",
            width: "2cm",
            height: "1cm"
          }}
          type="reset"
        >
          {text}
        </button>
      );
    default:
      return (
        <button
          style={{
            backgroundColor: "yellow",
            color: "transparent",
            width: "2cm",
            height: "1cm"
          }}
          type={undefined}
        >
          {text}
        </button>
      );
  }
}
