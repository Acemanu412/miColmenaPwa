import React from "react";
import { observer } from "mobx-react";

import { NavBar } from "./NavBar";

import moment from "moment";

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

const EstadoGeneral = observer(() => {
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
          <p>{`${moment().date()} /${moment().month()}  /${moment().year()}`}</p>
        </DataRow>
        <label>Estado de salud</label>

        <DataRow>
          <select
            style={{
              flex: 1,
            }}
          >
            <option>Saludable</option>
            <option>Colapsadas</option>
            <option>Enjambrazón</option>
          </select>
        </DataRow>
        <ContainerCentrado>
          <label>Grabaciones</label>
          <Microfono />
          <p style={{ fontSize: "0.8rem" }}>Toca para grabar</p>
        </ContainerCentrado>
      </DataContainer>
    </Container>
  );
});
export default EstadoGeneral;
