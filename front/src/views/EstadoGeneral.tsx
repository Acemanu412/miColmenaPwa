import React from "react";
import { observer } from "mobx-react";

import { NavBar } from "./NavBar";

import moment from "moment";

import { useForm } from "../hooks/formConsejosHook";
import { useStores } from "../hooks/useStore";

import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";

import {
  Container,
  Panel,
  Header,
  BoldText,
  DataContainer,
  DataRow,
  Calendar,
  ContainerCentrado,
  Microfono,
} from "../styles/EstadoGeneralS";

const EstadoGeneral = observer((props) => {
  const store = useStores();
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
            defaultValue={`${moment().date()} /${moment().month()}  /${moment().year()}`}
          />
        </DataRow>
        <label>Estado de salud</label>

        <DataRow>
          <select
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

        <Microfono />

        <p
          style={{
            paddingTop: "10%",
          }}
        >
          Toca para grabar
        </p>
      </ContainerCentrado>
      <FormAtrasButton
        onClick={(e) => {
          e.preventDefault();
          props.history.push("/vistaColmena");
        }}
      />
    </Container>
  );
});
export default EstadoGeneral;
