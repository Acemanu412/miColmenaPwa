import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: any) => void;
}

export const Input = (props: IInputProps) => <input {...props} />;
