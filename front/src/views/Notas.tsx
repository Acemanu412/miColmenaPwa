import MicRecorder from 'mic-recorder-to-mp3'
import React from "react";

import {
    ImagenGrabacion,
    InputNotas,
    NotasContainer,
    Separador,
    TextoNotas,
} from "../styles/NotasStyles";
import { NavBar } from "./NavBar";

export const Notas: any = () => {

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

    function stopRecording() {
        grabando = false;
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });
            // const player = new Audio(URL.createObjectURL(file));
            // player.play()
            //download(file, "/user/file.mp3", "audio/mp3");

        }).catch((e) => {
            console.error(e);
        });
    }

    return (
        <div>
            <NavBar />
            <NotasContainer>
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
                <InputNotas rows={8} cols={30}></InputNotas>
            </NotasContainer>
        </div >
    );
};