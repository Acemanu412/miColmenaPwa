import styled from "styled-components";

import { Input } from "../components/Input";
import { color } from "../themes";

const { amarillo, gris, azul } = color;

export const ToggleSwitchContainer = styled.label`
    /* The switch - the box around the slider */
    position: relative;
    margin-right: 3.5vw;
    width: 11vw;
    height: 3.2vh;
    > input:checked + span {
        background-color: ${azul};
    }
    > input:focus + span {
        box-shadow: 0 0 1px ${azul};
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
        height: 18px;
        width: 18px;
        left: 0px;
        bottom: -2px;
        background-color: ${amarillo};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }
  `;
