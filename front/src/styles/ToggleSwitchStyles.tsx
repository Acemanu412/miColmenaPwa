import styled from "styled-components";

import { Input } from "../components/Input";
import { color } from "../themes";

const { amarillo, gris, negro } = color;

export const ToggleSwitchContainer = styled.label`
    /* The switch - the box around the slider */
    position: relative;
    display: inline-block;
    top: -5px;
    left: -7px;
    width: 40px;
    height: 25px;
    > input:checked + span {
        background-color: ${negro};
    }
    > input:focus + span {
        box-shadow: 0 0 1px ${negro};
    }
    > input:checked + span:before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }      
  `;

export const ToggleSwitchInput = styled(Input)`
    /* Hide default HTML checkbox */
    opacity: 0;
    width: 0;
    height: 0;
  `;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 6px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${gris};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    :before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: -2px;
        bottom: 0px;
        background-color: ${amarillo};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }
  `;
