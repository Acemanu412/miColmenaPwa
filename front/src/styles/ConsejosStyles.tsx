import styled from "styled-components";

import { color } from "../themes";

const { amarillo, azul, blanco, negro } = color;

export const ConsejosContainer = styled.div`
    height: 100vh;
    display:flex;
    flex-direction: column;
`;

export const Intervenciones = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 2rem;
    height: 50%;
    padding-bottom: 0;
`;

export const Alimento = styled.div`
    height: 30%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 2rem 4rem;
    padding-bottom: 0;
`;

export const Cosechas = styled.div`
    height: 30%;
`;

export const Cuadro = styled.div`
    border: 1px solid #e0e0e0;
    width: 25%;
    height: 3rem;
    text-align: center;
    padding: 0.7rem 0rem;
    color: ${azul};
    background-color: white;
    font-weight: bold;
    font-size: 0.7rem;
    min-width: 4rem;
`;

export const ConsejosTexto = styled.div`
    color: ${negro};
    font-weight: bold;
    margin: 2rem;
    margin-bottom: 0;
`;

export const CosechaContainer = styled.div`    
display: flex;
    flex-flow: row wrap;
    height: 100%;
    padding: 1rem;
    padding-left: 2rem;
    padding-top: 1.5rem;
`;

export const ValorCosecha = styled.div`
    height: 50%;
    width: 50%;
    position: relative; 
    margin-bottom: 45px; 
    > input:focus ~ label, input:valid ~ label, input:focus:placeholder-shown ~ label {
        top:-20px;
        font-size: 18px;
        transform: scale(.75); left: -2px;
        color:${amarillo};
      }
    > input:placeholder-shown ~ label     {
        color: #999; 
        font-size: 23px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: all 0.2s ease;
      }
`;

export const UnidadCosecha = styled.div`
    height: 100%;
    width: 50%;
`;

export const InputCosecha = styled.input`
    font-size: 18px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: ${blanco};
	color: #636363;
	width: 100%;
	border: none;
	border-radius: 0;
    border-bottom: 1px solid #757575;
    :focus { outline: none; }
`;

export const LabelCosecha = styled.label`
    color: #999; 
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: all 0.2s ease;
`;