import React from "react";
import { ToggleSwitchContainer, ToggleSwitchInput, Slider } from "../styles/ToggleSwitchStyles";

export const ToggleSwitch: any = ({ name, handleInputChange }) =>
    <ToggleSwitchContainer >
        <ToggleSwitchInput type="checkbox" name={name} onChange={handleInputChange} />
        <Slider />
    </ToggleSwitchContainer>