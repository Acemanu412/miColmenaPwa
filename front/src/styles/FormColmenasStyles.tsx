import styled from "styled-components";
import { color } from "../themes";

const { amarillo, negro, azul, blanco, gris } = color;

export const Header = styled.div`
display:flex;
flex-direction:row;
align-items:center;
background-color: #F9F9F9
height: 10vh;
position: relative;
top: 4vh;
padding-left:3%;
margin-top: 1cm;
`;

export const Panel = styled.img.attrs({
  src: require("../utils/colmenaGris@2x.png"),
})`
  height: 90%;
`;
export const BoldText = styled.p`
  color: #999999;
  font-weight: 63;
  padding-left: 3%;
`;

export const FormColmenasContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  width: 100%;
  height:100vh
  padding: 3.5rem 1rem;
`;

export const Poblacion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 30%;
`;

export const Text = styled.span`
    font-weight: bold;
    color: ${negro};
    font-size:0.9rem;
    height: 2rem;
    width: 100%;
    background-color:white
    padding-top: 0.5rem;
    text-align:left;
    margin-bottom: 1rem;
`;

export const Enfermedades = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    padding-left: 1rem;
    height: 50%;
    padding-bottom: 0;
    justify-content: center;
`;

interface ICheckboxContainer {
  activo: boolean;
}

export const CheckboxContainer = styled.label<ICheckboxContainer>`
  position: relative;
  padding-left: 0.8rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 4rem;
  height: 3rem;
  border: 1px solid #e0e0e0;
  background-color: ${props => props.activo ? amarillo : blanco};
  text-align: center;
  font-weight: bold;
  font-size: 0.6rem;
  color: ${azul};
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxFormColmenas = styled.input`
    visibility: hidden;
`

export const TextGray = styled.div`
    color: ${gris};
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0;
    font-size:0.8rem;
`;

export const RangeSliderColmenas = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

export const TextCantidad = styled.div`
    display: flex;
    color: ${azul};
    font-weight: bold;
    font-size:0.9rem;
    margin: 2rem;
`;

export const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
`;