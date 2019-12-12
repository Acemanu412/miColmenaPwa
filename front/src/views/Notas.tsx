import axios from "axios";
import MicRecorder from "mic-recorder-to-mp3";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { postNewDailyRegister } from "../api/index";
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

export const Notas: React.FC<RouteComponentProps> = observer((props) => {
    const store = useStores();
    const IP = process.env.REACT_APP_IP || "app.micolmena.xyz";
    const PORT = process.env.REACT_APP_PORT || "";
    const PROTOCOL = process.env.REACT_APP_PROTOCOL || "https";
    const [audioNotas, setAudioNotas] = useState(null);

    const notas = async () => {

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        const formData = new FormData();
        formData.append("audio",
            audioNotas);
        formData.append("audio",
            store.media.audio);
        const filesReceived = await axios.post(`${PROTOCOL}://${IP}${PORT}/api/colmena/audio`,
            formData,
            config);
        store.updateNotasForm(inputsSalientes);
        console.log(filesReceived.data[0]);
        store.setUrlNotasForm(filesReceived.data[0].path);
        store.setUrlEstadoGeneralForm(filesReceived.data[1].path);

        postNewDailyRegister(
            store.colmenasForm,
            store.consejosAlimento,
            store.consejosCosecha,
            store.consejosIntervenciones,
            store.estadoGeneral,
            store.notasForms,
            store.reinaForms,
            store.colmena.id,
        );



        props.history.push(`/vistaColmena/${store.colmena.id}`);
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
        setAudioNotas(audioRec);
    }

    return (
        <div>
            <NavBar />
            {store.user || (!store.user && store.isFetchingUser) ?
                <div>
                    <NotasContainer>
                        <TextoNotas>Agregar nota de voz. Será transcripta en minutos</TextoNotas>
                        <div id="divGrabando" className="noGrabando" onClick={() => {
                            const claseGrabando = document.querySelector("#divGrabando");
                            grabando ? stopRecording() : startRecording();
                            return claseGrabando !== null && grabando
                                ? (claseGrabando.classList.remove("noGrabando"),
                                    claseGrabando.classList.add("Grabando"))
                                : (claseGrabando.classList.remove("Grabando"),
                                    claseGrabando.classList.add("noGrabando"));
                        }
                        }>
                            <ImagenGrabacion src={require("../utils/microfonoAmarillo@2x.png")} />
                        </div>
                        <Separador />
                        <TextoNotas>Escribe tus notas</TextoNotas>
                        <InputNotas
                            name="notaTexto"
                            value={inputsSalientes.notaTexto}
                            rows={8} cols={30}
                            onChange={(e) => { handleInputChange(e); }}>
                        </InputNotas>
                    </NotasContainer>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <FormAtrasButton onClick={(e) => {
                            e.preventDefault();
                            props.history.push("/consejos");
                        }} />
                        <FormSubmitButton onClick={(e) => {
                            handleSubmit(e);
                        }} />
                    </div>
                </div>
                : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
        </div >
    );
});
