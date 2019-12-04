import styled from "styled-components";
import { Input } from "../components/Input";
import { color } from "../themes/index";

const { amarillo, blanco } = color;

export const SliderContainer = styled.div`
    width: 100%; /* Width of the outside container */
`;

export const SliderInput = styled(Input)`
-webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  height: 0.20rem;
  border-radius: 5px;
  background: ${amarillo};
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  :hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px;
    border: 5px solid ${amarillo};
    border-radius: 50%;
    height: 25px; /* Slider handle height */
    background: ${blanco};
    cursor: pointer; /* Cursor on hover */
  }
  ::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px;
    border: 5px solid ${amarillo};
    border-radius: 50%;
    height: 25px; /* Slider handle height */
    background: ${blanco};
    cursor: pointer; /* Cursor on hover */
  }
`;
