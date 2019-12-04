import React from "react";
import { CheckboxContainer, CheckboxInput, Checkmark } from "../styles/CheckboxStyles";

export const Checkbox: any = ({ name, handleInputChange }) =>
    <CheckboxContainer >
        <CheckboxInput type="checkbox" name={name} onChange={handleInputChange} />
        <Checkmark />
    </CheckboxContainer>;
