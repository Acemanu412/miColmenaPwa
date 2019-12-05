import React from "react";

import { useForm } from "../hooks/formHook";
import {
    FormContent,
    ImageContainer,
    NotaInput,
    StyledForm,
    StyledImage,
    StyledInput,
    StyledSelect,
    TextoAmarillo,
} from "../styles/AgregarColmenaEstandarStyles";
import {
    LogoYellowBanner,
    SpanBanner,
    WrapperDivForImages,
    YellowBanner,
} from "../styles/AgregarColmenaStyles";
import { NavBar } from "./NavBar";

export const AgregarColmenaEstandar: React.FC = () => {

    const agregarColmena = () => {
        alert("AGREGADA");
    };

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(agregarColmena, {
        direccionColmenas: "",
        especieAbejas: "",
        nombreColmena: "",
        tipoColmena: "",
    });

    return (<div>
        <NavBar />
        <YellowBanner>
            <WrapperDivForImages>
                <LogoYellowBanner src={require("../utils/lapizCirculo@2x.png")} />
            </WrapperDivForImages>
            <SpanBanner>Editar colmena</SpanBanner>
        </YellowBanner>
        <StyledForm>
            <FormContent>
                <TextoAmarillo>Nombre Colmena</TextoAmarillo>
                <StyledInput
                    placeholder="Nombre de su colmena"
                    name="nombreColmena"
                    value={inputsSalientes.nombreColmena}
                    onChange={handleInputChange} />
                <NotaInput>Esta será la etiqueta primaria para esta colmena</NotaInput>
            </FormContent>
            <FormContent>
                <TextoAmarillo>Tipo de Colmena</TextoAmarillo>
                <StyledSelect
                    name="tipoColmena"
                    value={inputsSalientes.tipoColmena}
                    onChange={handleInputChange}>Tipo de Colmena
                    <option value="langstroth">Langstroth</option>
                    <option value="warre">Warre</option>
                    <option value="topBar">Top Bar</option>
                    <option value="otroTipo">Otro</option>
                </StyledSelect>
                <NotaInput>Seleccione el tipo de colmena que está utilizando</NotaInput>
            </FormContent>
            <FormContent>
                <TextoAmarillo>Especie de Abejas</TextoAmarillo>
                <StyledSelect
                    name="especieAbejas"
                    value={inputsSalientes.especieAbejas}
                    onChange={handleInputChange}>Especie de Abejas
                    <option value="apisMellifera">Apis mellifera</option>
                    <option value="apisMelliferaCaucasia">Apis mellifera caucasia</option>
                    <option value="apisMelliferaCarnica">Apis mellifera carnica</option>
                    <option value="apisMelliferaLigustica">Apis mellifera ligustica</option>
                    <option value="apisMelliferaMellifera">Apis mellifera mellifera</option>
                    <option value="apisMelliferaScutellata">Apis mellifera scutellata</option>
                    <option value="otraEspecie">Otra</option>
                </StyledSelect>
                <NotaInput>Seleccione una o multiples especies para híbridos</NotaInput>
            </FormContent>
            <FormContent>
                <TextoAmarillo>Foto de Colmena</TextoAmarillo>
                <ImageContainer>
                    <StyledImage src={require("../utils/lapizCirculo@2x.png")} />
                </ImageContainer>
                <NotaInput>Tome una foto de su colmena</NotaInput>
            </FormContent>
            <FormContent>
                <TextoAmarillo>Dirección de Colmena</TextoAmarillo>
                <StyledInput
                    name="direccionColmena"
                    value={inputsSalientes.direccionColmena}
                    onChange={handleInputChange} />
                <NotaInput>Seleccione la localización de su colmena</NotaInput>
            </FormContent>

        </StyledForm>
        <hr style={{ border: "1px solid lightgrey" }} />
    </div>
    );
};
