import MicRecorder from 'mic-recorder-to-mp3'
import React, { useState, useEffect } from "react";
import download from "downloadjs"

import { NavBar } from "./NavBar";
import {
    ImagenGrabacion,
    InputNotas,
    NotasContainer,
    Separador,
    TextoImagenGrabacion,
    TextoNotas,
    ImagenContainer,
} from "../styles/NotasStyles";

export const Notas: any = () => {

    const recorder = new MicRecorder({
        bitRate: 128,
    });

    let grabando = false;

    function startRecording() {
        console.log("start!!!")
        grabando = true;
        recorder.start().then((e) => {
        }).catch((e) => {
            console.error(e);
        });
    }

    function stopRecording() {
        console.log("stop!!!")
        grabando = false;
        recorder.stop().getMp3().then(([buffer, blob]) => {
            console.log(buffer, blob);
            const file = new File(buffer, 'music.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });
            const player = new Audio(URL.createObjectURL(file));
            player.play()
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
                <ImagenContainer onClick={() =>
                    grabando ? stopRecording() : startRecording()
                }>
                    <ImagenGrabacion src={require("../utils/microfonoAmarillo@2x.png")} />
                </ImagenContainer>
                <Separador />
                <TextoNotas>Escribe tus notas</TextoNotas>
                <InputNotas rows={8} cols={30}></InputNotas>
            </NotasContainer>
        </div >
    )
}


// https://mobx-state-tree.gitbook.io/docs/concepts/volatile-state#model-volatile
// https://www.npmjs.com/package/mic-recorder-to-mp3