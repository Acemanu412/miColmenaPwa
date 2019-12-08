import axios from "axios";
import MicRecorder from "mic-recorder-to-mp3";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import { FormAtrasButton, FormSubmitButton } from "../styles/FormStyles";
import {
    ImagenGrabacion,
    InputNotas,
    NotasContainer,
    Separador,
    TextoNotas,
} from "../styles/NotasStyles";
import { NavBar } from "./NavBar";

export const Notas: React.FC<RouteComponentProps> = (props) => {
    const store = useStores();

    const [audio, setAudio] = useState(null);

    const notas = () => {
        const formData = new FormData();
        formData.append("audio",
            audio);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        inputsSalientes.urlNotaAudio = "/uploads/audio.mp3";
        axios.post(`http://${process.env.REACT_APP_IP}:2222/api/colmena/audio`,
            formData,
            config);
        store.updateNotasForm(inputsSalientes);
    };

    const { inputsSalientes,
        handleInputChange,
        handleSubmit } = useForm(notas, {
            notaTexto: "",
            urlNotaAudio: "",
        });

    const recorder = new MicRecorder({
        bitRate: 128,
    });

    let grabando = false;

    function startRecording() {
        grabando = true;
        recorder.start()
            .catch((e) => {
                alert("Active el micrófono para grabar un audio");
                const claseGrabando = document.querySelector("#divGrabando");
                claseGrabando.classList.remove("Grabando");
                claseGrabando.classList.add("noGrabando");

            });
    }

    async function stopRecording() {
        grabando = false;
        const [buffer, blob] = await recorder.stop().getMp3();
        const audioRec = new File(buffer, "music.mp3", {
            lastModified: Date.now(),
            type: blob.type,
        });
        setAudio(audioRec);
    }
    console.log(store)

    return (
        <div>
            <NavBar />
            <NotasContainer>
                <TextoNotas>Agregar nota de voz. Será transcripta en minutos</TextoNotas>
                <div id="divGrabando" className="noGrabando" onClick={() => {
                    const claseGrabando = document.querySelector("#divGrabando");
                    grabando ? stopRecording() : startRecording();
                    return claseGrabando !== null && grabando
                        ? (claseGrabando.classList.remove("noGrabando"), claseGrabando.classList.add("Grabando"))
                        : (claseGrabando.classList.remove("Grabando"), claseGrabando.classList.add("noGrabando"));

                }
                }>
                    <ImagenGrabacion src={require("../utils/microfonoAmarillo@2x.png")} />
                </div>
                <Separador />
                <TextoNotas>Escribe tus notas</TextoNotas>
                <InputNotas rows={8} cols={30} onChange={handleInputChange}></InputNotas>
            </NotasContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormAtrasButton onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/consejos");
                }} />
                <FormSubmitButton onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/vistaColmena");
                    handleSubmit(e);
                }} />
            </div>
        </div >
    );
};
