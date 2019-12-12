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

axios.defaults.withCredentials = true;
let photo;

export const AgregarColmenaDevice: React.FC<RouteComponentProps> = (props) => {
    const store = useStores();

    const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
    const PORT = process.env.REACT_APP_PORT || "";
    const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";

    function handleChangeImagen(e) {
        e.preventDefault();
        photo = e.target.files[0];
        inputsSalientes.foto = photo;
    }

    const agregarColmenaDevice = async (e) => {
        store.updateAgregarColmenaDevice(inputsSalientes);
        store.setMedia({ photo });
        const formData = new FormData();
        formData.append("photo", photo);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        axios
            .post(
                `${PROTOCOL}://${IP}${PORT}/api/colmena/photo`,
                formData,
                config,
            )
            .then((res) => res.data)
            .then((newColmena: any) => {
                axios.post(
                    `${PROTOCOL}://${IP}${PORT}/api/colmena/agregarColmenaDevice/${newColmena.id}`,
                    inputsSalientes,
                ).then(() => props.history.push("/home"));
            })
            .catch((error) => {
                throw error;
            });
    };

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(
        agregarColmenaDevice,
        {
            MACadress: "",
            foto: "",
            nombreColmena: "",
        },
    );

    return (
        <div>
            <NavBar />
            {store.user || (!store.user && store.isFetchingUser) ?
                <div>
                    <YellowBanner>
                        <WrapperDivForImages>
                            <LogoYellowBanner src={require("../utils/lapizCirculo@2x.png")} />
                        </WrapperDivForImages>
                        <SpanBanner>Editar colmena</SpanBanner>
                    </YellowBanner>
                    <StyledForm
                        onSubmit={(e) => {
                            e.persist();
                            const evento = e;
                            handleSubmit(evento);
                        }}
                    >
                        <FormContent>
                            <TextoAmarillo>Nombre Colmena</TextoAmarillo>
                            <StyledInput
                                placeholder="Nombre de su colmena"
                                name="nombreColmena"
                                value={inputsSalientes.nombreColmena}
                                onChange={handleInputChange}
                            />
                            <NotaInput>
                                Esta será la etiqueta primaria para esta colmena
                            </NotaInput>
                        </FormContent>
                        <FormContent>
                            <TextoAmarillo>MAC Adress del Dispositivo</TextoAmarillo>
                            <StyledInput
                                placeholder="MAC adress"
                                name="MACadress"
                                value={inputsSalientes.MACadress}
                                onChange={handleInputChange}
                            />
                        </FormContent>
                        <FormContent>
                            <TextoAmarillo>Foto de Colmena</TextoAmarillo>
                            <ImageContainer>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        backgroundColor: "#ffff",
                                        border: "1px solid",
                                        borderColor: "#e5e3e3",
                                        borderRadius: "2px",
                                        display: "flex",
                                        height: "4vh",
                                        outline: "none",
                                        paddingTop: "0.2rem",
                                        width: "50vw",
                                    }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="file-input"
                                        onChange={handleChangeImagen}
                                    />
                                </div>
                            </ImageContainer>
                            <NotaInput>Tome una foto de su colmena</NotaInput>
                        </FormContent>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <FormAtrasButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.history.push("/agregarColmena");
                                }}
                            />
                            <FormSubmitButton />
                        </div>
                    </StyledForm>
                </div>
                : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
        </div>
    );
};
