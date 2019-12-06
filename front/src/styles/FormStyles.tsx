import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { color } from "../themes";

const { azul, blanco } = color;

const SubmitWrapper = styled(Button)`
    display: inline-block;
    width: 150px;

    background: ${blanco};
    color: ${azul};

    border: none;
    padding: 0;

    cursor: pointer;
`;

export const FormSubmitButton = (({ ...props }) => {
    return <SubmitWrapper {...props} text={"Crear registro"} />;
});

const SiguienteWrapper = styled(Button)`
    display: inline-block;
    width: 100px;

    background: ${blanco};
    color: ${azul};

    border: none;
    padding: 0;

    cursor: pointer;
  `;

export const FormSiguienteButton = (({ ...props }) => {
    return <SiguienteWrapper {...props} text={"Siguiente"} />;
});

const AtrasWrapper = styled(Button)`
    display: inline-block;
    width: 100px;

    background: ${blanco};
    color: ${azul};

    border: none;
    padding: 0;

    cursor: pointer;
`;

export const FormAtrasButton = (({ ...props }) => {
    return <AtrasWrapper {...props} text={"Atrás"} />;
});
