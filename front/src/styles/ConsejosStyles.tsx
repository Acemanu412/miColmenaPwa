import styled from "styled-components";

import { color } from "../themes";

const { amarillo, azul, blanco, negro } = color;

export const ConsejosContainer = styled.div`
    height: 100vh;
    display:flex;
    flex-direction: column;
    margin-top: 3rem;
    align-items: center;
`;

export const Intervenciones = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 2rem;
    padding-left: 2rem;
    height: 50%;
    padding-bottom: 0;
    justify-content: center;
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
    margin-bottom: 4rem; 
    > input:focus ~ label, input:valid ~ label, input:focus:placeholder-shown ~ label {
        top:-20px;
        font-size: 18px;
        transform: scale(.75); left: -2px;
        color:${amarillo};
      }
    > input:placeholder-shown ~ label     {
        color: ${negro}; 
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
    position: relative; 

`;

export const InputCosecha = styled.input`
    font-size: 18px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: ${blanco};
	color: ${amarillo};
	width: 100%;
	border: none;
	border-radius: 0;
    border-bottom: 1px solid #757575;
    :focus { outline: none; }
`;

export const LabelCosecha = styled.label`
    color: ${negro}; 
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: all 0.2s ease;
`;

export const SelectCosecha = styled.select`
    font-size: 18px;
    padding: 10px 10px 10px 30px;
    -webkit-appearance: none;
    display: block;
    background: ${blanco};
    color: ${amarillo};
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #757575;
    :focus { outline: none; }
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
    background-repeat: no-repeat;
    background-position: center right 20px;
`;

export const LabelUnidad = styled.label`
    color: ${negro}; 
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 30px;
    top: -10px;
    transition: all 0.2s ease;
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

export const LabelCheckbox = styled.label`
    position: absolute;
    left: 5px;
    top: 10px;
    font-weight: bold;
    font-size: 0.7rem;
    color: ${azul};
    background-color: ${azul}
`;

export const CheckboxConsejos = styled.input`
    visibility: hidden;
`
