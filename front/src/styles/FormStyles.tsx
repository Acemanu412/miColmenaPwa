import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { color } from "../themes";

const { azul, blanco } = color;

const SiguienteWrapper = styled(Button)`
    position: absolute;
    bottom: 10vh;
    right: 10vw;

    background: ${blanco};
    color: ${azul};

    border: none;
    padding: 0;

    cursor: pointer;
  `;

export const FormSiguienteButton = (({...props}) => {
    return <SiguienteWrapper {...props} text={"Siguiente"} />;
});

const AtrasWrapper = styled(Button)`
    position: absolute;
    bottom: 10vh;
    left: 10vw;

    background: ${blanco};
    color: ${azul};

    border: none;
    padding: 0;

    cursor: pointer;
`;

export const FormAtrasButton = (({...props}) => {
    return <AtrasWrapper {...props} text={"Atrás"} />;
});
