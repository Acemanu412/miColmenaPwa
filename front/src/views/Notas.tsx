import React, { useState } from "react";

import { NavBar } from "./NavBar";
import {
    ImagenGrabacion,
    InputNotas,
    NotasContainer,
    Separador,
    TextoImagenGrabacion,
    TextoNotas,
} from "../styles/NotasStyles";

export const Notas: React.FC = () => {

    return (
        <div>
            <NavBar />
            <NotasContainer>
                <TextoNotas>Agregar nota de voz. Será transcripta en minutos</TextoNotas>
                <ImagenGrabacion src={require("../utils/microfonoAmarillo@2x.png")} />
                <TextoImagenGrabacion>Toca para grabar</TextoImagenGrabacion>
                <Separador />
                <TextoNotas>Escribe tus notas</TextoNotas>
                <InputNotas rows={8} cols={30}></InputNotas>
            </NotasContainer>
        </div>
    )
}