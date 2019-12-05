import axios from "axios";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import {
    FormContent,
    ImageContainer,
    NotaInput,
    StyledForm,
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
import { FormAtrasButton, FormSubmitButton } from "../styles/FormStyles";
import { NavBar } from "./NavBar";

export const AgregarColmenaEstandar: React.FC<RouteComponentProps> = (props) => {

    const store = useStores();

    let photo;

    function handleChangeImagen(e) {
        e.preventDefault();
        photo = e.target.files[0];
        inputsSalientes.foto = photo;
    }

    const agregarColmena = (e) => {
        store.updateAgregarColmenaForm(inputsSalientes);
        store.setMedia({ photo });
        const formData = new FormData();
        formData.append("photo", photo);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        axios.post(`http://${process.env.REACT_APP_IP}:2222/api/colmena/photo`, formData, config)
            .then(() => props.history.push("/home"))
            .catch((error) => { throw error; });

    };

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(agregarColmena, {
        direccionColmena: "",
        especieAbejas: "",
        foto: "",
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
        <StyledForm onSubmit={(e) => { e.persist(); const evento = e; handleSubmit(evento); }}>
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
                    <option selected value="langstroth">Langstroth</option>
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
                    defaultValue="Apis mellifera"
                    onChange={handleInputChange}>Especie de Abejas
                    <option selected value="apisMellifera">Apis mellifera</option>
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
                    <input
                        type="file"
                        accept="image/*"
                        id="file-input"
                        onChange={handleChangeImagen} />

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormAtrasButton onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/agregarColmena");
                }} />
                <FormSubmitButton />
            </div>
        </StyledForm>

    </div >
    );
};
