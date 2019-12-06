import styled from "styled-components";

import { Input } from "../components/Input";
import { color } from "../themes";

const { amarillo } = color;

export const StyledForm = styled.form`
    padding: 0.5rem;
`;

export const TextoAmarillo = styled.span`
    display:block;
    color: ${amarillo};
    font-weight: bold;
    font-size: 0.9rem;
`;

export const FormContent = styled.div`
    margin: 1rem;
`;

export const StyledInput = styled(Input)`
    margin-top: 1rem;
`;

export const StyledSelect = styled.select`

`;

export const NotaInput = styled.span`
    display:block;
    font-size: 0.7rem;

`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;

export const StyledImage = styled.img`
    height: 12vh;
`;
