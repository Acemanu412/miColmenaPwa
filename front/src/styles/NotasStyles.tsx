import styled from "styled-components";

import { color } from "../themes";

const { negro } = color;

export const NotasContainer = styled.div`
    margin-top: 3rem;
    padding: 1rem 2rem;
`;

export const TextoNotas = styled.div`
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const ImagenGrabacion = styled.img`
    height: 4rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const TextoImagenGrabacion = styled.div`
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    margin: 2rem;
    margin-top: 1rem;
`;

export const InputNotas: any = styled.textarea`
    border-top: 1px solid ${negro};
`;

export const Separador: any = styled.div`
    heigth: 1rem;
    border: 1px solid ${negro};
`;