import axios from "axios";
import MicRecorder from 'mic-recorder-to-mp3'
import React, { useState, useEffect } from "react";
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
        store.updateNotasForm(inputsSalientes);
        const formData = new FormData();
        formData.append("audio", audio);
        const config = {
            headers: { "content-type": "multipart/form-data" }
        };
        axios.post(`http://${process.env.REACT_APP_IP}:2222/api/colmena/audio`, formData, config);
    };

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(notas, {
        urlNotaAudio: "",
        notaTexto: "",
    });

    const recorder = new MicRecorder({
        bitRate: 128,
    });

    let grabando = false;

    function startRecording() {
        grabando = true;
        recorder.start().then((e) => {
        }).catch((e) => {
            console.error(e);
        });
    }

    async function stopRecording() {
        grabando = false;
        const [buffer, blob] = await recorder.stop().getMp3()
        setAudio(new File(buffer, 'music.mp3', {
            type: blob.type,
            lastModified: Date.now()
        }))


        // const player = new Audio(URL.createObjectURL(audio));
        // player.play()
    }

    return (
        <div>
            <NavBar />
            <NotasContainer>
                <form action="POST" onSubmit={handleSubmit}>
                    <TextoNotas>Agregar nota de voz. Será transcripta en minutos</TextoNotas>
                    <div id="divGrabando" className="noGrabando" onClick={() => {
                        let claseGrabando = document.querySelector("#divGrabando")
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
                </form>

                <FormAtrasButton onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/consejos");
                }} />
                <FormSubmitButton onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/colmena");
                    handleSubmit(e);
                }} />
            </NotasContainer>
        </div >
    );
};