import styled from "styled-components";

import { color } from "../themes";

const { azul, negro, gris } = color;

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
    height: ${(props) => props.reinaPresente ? "22vh" : "12vh"};
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
    margin-top: 1vh;
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
    justify-content: flex-start;
    width: 50%;
    height: 100%;
`;

export const RangeSliderText = styled.div`
    font-weight: bold;
    font-size: .9rem;
    color: ${azul};
    margin-top: 1rem;
    `;

export const ReinaText = styled.span`
    font-weight: 500;
    color: ${negro};
    font-size:0.9rem;
    height: 1.5rem;
    width: 100%;
    background-color:white
    padding-top: 1.3vh;
    text-align:left;
`;

export const ReinaGreyText = styled.strong`
    margin-top: 1vh;
    color: ${gris};
`;

export const ReinaGreyTextCheckBox = styled.strong`
    margin-top: 2.6vh
    display: flex;
    color: ${gris};
`;

export const PanelImg = styled.img.attrs({
    src: require("../utils/abejaGrisCirculo@2x.png"),
})`
    margin-top: 2.2vh;
    margin-bottom: 1.8vh;
    margin-left: 8vw;
    height: 8vh;
    width: 8vh;
  `;

export const PanelDiv = styled.div`
    margin-top: 9vh;
    display: flex;
`;

export const PanelText = styled.span`
    font-family: "montserrat";
    font-weight: 500;
    font-size: .9rem;
    align-self: center;
    padding-left: 4.5vw;
    color: #999999;
`;

export const PanelHR = styled.hr`
    border-bottom-color: #e6e6e6;
    border-bottom-width: .4vh;
    border-bottom-style: solid;
    border-left: none;
    border-right: none;
    border-top: none
    margin-bottom: 1.7vh;
`;

export const FooterBtns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-left: 0;
    margin-right: 0;
`;
