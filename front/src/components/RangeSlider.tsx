import React from "react";
import { SliderContainer, SliderInput } from "../styles/RangeSliderStyles";

export const RangeSlider: any = ({ min, max, value, name, handleInputChange }) =>
    <SliderContainer >
        <SliderInput type="range" min={min} max={max} value={value} name={name} onChange={handleInputChange} />
    </SliderContainer>