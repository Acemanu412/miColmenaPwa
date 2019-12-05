import { observer } from "mobx-react";
import moment from "moment";
import React from "react";

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
      <FormSiguienteButton
        onClick={(e) => {
          e.preventDefault();
          props.history.push("/colmenas");
          // handleSubmit(e);
        }}
      />
    </Container>
  );
});
export default EstadoGeneral;
