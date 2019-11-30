import styled from "styled-components";

import { Input } from "../components/Input";
import { color } from "../themes";

const { amarillo, blanco } = color;

export const CheckboxContainer = styled.label`
    display: block;
    position: relative;
    top: -6px;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    > input:checked ~ span {
        background-color: ${amarillo};
    }
    > input:checked ~ span:after {
        display: block;
    }
    > span:after {
        left: 8px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid ${blanco};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }    
  `;

export const CheckboxInput = styled(Input)`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `;

export const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 0.1rem solid ${amarillo}
    background-color: ${blanco};
    :after {
        content: "";
        position: absolute;
        display: none;
    }
  `;