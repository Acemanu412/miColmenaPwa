import styled from "styled-components";

import { color } from "../themes";

const { amarillo, negro, gris } = color;

export const ReinaContainer = styled.form`
    display:flex;
    flex-direction: column;
    font-size: 10px;
    width: 100%;
    height: 100vh
    padding-left: 8vw;
    padding-right: 8vw;
`;

interface IEstadoReinaHuevos {
    reinaPresente: boolean;
}

export const EstadoReinaHuevos = styled.div<IEstadoReinaHuevos>`
    display:flex;
    flex-flow: column nowrap;
    justify-content:flex-start;
    align-items: center;
    width: 100%;
    height: ${(props) => props.reinaPresente ? "24%" : "15%"};
    text-align: center;
    ;
`;

export const CelulasReina = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 30%;
`;

export const ToggleSwitchsReina = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 8vh;
`;

export const CheckboxesReina = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 8vh;
`;

export const RangeSlidersReina = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
`;

export const ToggleSwitchContainer = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const ReinaCheckboxContainer = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const RangeSliderText = styled.div`
    font-weight: bold;
    color: ${amarillo};
    margin-top: 1rem;
    `;

export const ReinaText = styled.span`
    font-weight: 500;
    color: ${negro};
    font-size:0.9rem;
    height: 1.5rem;
    width: 100%;
    background-color:white
    padding-top: 0.5rem;
    text-align:left;
`;

export const ReinaGreyText = styled.strong`
    color: ${gris};
`;

export const ReinaGreyTextCheckBox = styled.strong`
    display: flex;
    color: ${gris};
`;

export const Panel = styled.img.attrs({
    src: require("../utils/abejaGrisCirculo@2x.png"),
  })`
    margin-top: 2vh;
    margin-bottom: 1.5vh;
    margin-left: 8vw;
    height: 8vh;
    width: 8vh;
  `;
