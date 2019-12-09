import MicRecorder from "mic-recorder-to-mp3";
import { observer } from "mobx-react";
import moment from "moment";
import React from "react";
import { useForm } from "../hooks/formEstadoGeneral";

import { useStores } from "../hooks/useStore";
import {
  BoldText,
  Calendar,
  Container,
  ContainerCentrado,
  DataContainer,
  DataRow,
  Header,
  Microfono,
  Panel,
} from "../styles/EstadoGeneralS";
import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";
import { NavBar } from "./NavBar";

const EstadoGeneral = observer((props) => {
  const store = useStores();

  const estadoG = () => {
    store.updateEstadoGeneral(inputsSalientes);
  };

  const { inputsSalientes, handleInputChange, handleSubmit }: any = useForm(
    estadoG,
    {
      fecha: `${moment().date()} /${moment().month()}  /${moment().year()}`,
    }
  );

  const recorder = new MicRecorder({
    bitRate: 128,
  });

  let grabando = false;

  function startRecording() {
    grabando = true;
    recorder.start().catch((e) => {
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

    // const player = new Audio(URL.createObjectURL(audioRec));

    store.setMedia({});
    store.media.setAudio(audioRec);

    // player.play();
  }

  return (
    <Container>
      <NavBar />
      <Header>
        <Panel /> <BoldText>Estado General</BoldText>
      </Header>
      <DataContainer>
        <label>Fecha</label>
        <DataRow>
          <Calendar />
          <input
            style={{ border: "none", outline: "none" }}
            type="text"
            onChange={handleInputChange}
            value={inputsSalientes.fecha}
          />
        </DataRow>
        <label>Estado de salud</label>

        <DataRow>
          <select
            name="salud"
            onChange={handleInputChange}
            style={{
              flex: 1,
              outline: "none",
            }}
          >
            <option>Estado de salud</option>
            <option value="saludable">Saludable</option>
            <option value="colapsadas">Colapsadas</option>
            <option value="enjambrazon">Enjambrazón</option>
          </select>
        </DataRow>
      </DataContainer>
      <ContainerCentrado>
        <label style={{ paddingBottom: "10%" }}>Grabaciones</label>

        <div
          id="divGrabando"
          className="noGrabando"
          onClick={(e) => {
            const claseGrabando = document.querySelector("#divGrabando");
            grabando ? stopRecording() : startRecording();
            return claseGrabando !== null && grabando
              ? (claseGrabando.classList.remove("noGrabando"),
                claseGrabando.classList.add("Grabando"))
              : (claseGrabando.classList.remove("Grabando"),
                claseGrabando.classList.add("noGrabando"));
          }}
        >
          <Microfono />
        </div>
      </ContainerCentrado>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormAtrasButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/vistaColmena");
          }}
        />
        <FormSiguienteButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/colmenas");
            handleSubmit(e);
          }}
        />
      </div>
    </Container>
  );
});

export default EstadoGeneral;
