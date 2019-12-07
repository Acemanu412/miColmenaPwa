import { observer } from "mobx-react";
import moment from "moment";
import React, { useState } from "react";

import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";

import {
  AbejaBlanca,
  Abejas,
  Audio,
  BotonesContainer,
  Button,
  Button2,
  Button3,
  Container,
  ContainerSaludable,
  Corazon,
  Dia,
  Enlace,
  EnlaceContainer,
  Header,
  Libro,
  Mas,
  Menos,
  NameContainer,
  ProfileContainer,
  Saludable1,
  Saludable2,
  SemanaContainer,
} from "../styles/ColmenaStyles";
import { NavBar } from "./NavBar";
import VistaColmena1 from "./VistaColmena1";
import VistaColmena2 from "./VistaColmena2";
import VistaColmena3 from "./VistaColmena3";

const VistaColmenaData = observer((props) => {
  const [vista1, setVista1] = useState(true);
  const [vista2, setVista2] = useState(false);
  const [vista3, setVista3] = useState(false);
  const [week, setWeek] = useState([]);
  const [addWeek, setAddWeek] = useState(0)


  const newWeek = [];
  const dias = ["L", "M", "M", "J", "V", "S", "D"]

  for (let i = 0; i < 7; i++) {
    newWeek.push(moment().startOf("isoWeek").add(i + addWeek, "day").date().toString())
  }

  return (
    <Container>
      <NavBar />
      <Header>
        <Abejas />
        <ProfileContainer>
          <NameContainer>
            <p>Colmena de muestreo</p>
            <p>Lunes, 2 de Diciembre a las 15:00</p>
          </NameContainer>
          <ContainerSaludable>
            <Saludable1>
              <AbejaBlanca />
            </Saludable1>
            <Saludable2>
              <p
                style={{
                  fontSize: "0.8rem",

                  color: "white",
                }}
              >
                Saludable
              </p>
            </Saludable2>
          </ContainerSaludable>
        </ProfileContainer>
      </Header>
      <SemanaContainer>
        <Button2>
          <Menos onClick={() => setAddWeek(addWeek - 7)} />
        </Button2>
        {newWeek.map((day, index) => {
          return <Button3 key={index}>
            <Dia>
              <p>{dias[index]}</p> <p>{day}</p>
            </Dia>
          </Button3>;
        })}
        <Button2>
          <Mas onClick={() => setAddWeek(addWeek + 7)} />
        </Button2>
      </SemanaContainer>
      <EnlaceContainer>
        <Enlace />
        <p style={{ fontSize: "0.8rem", paddingLeft: "1%", color: "white" }}>
          Comparti una foto de tu colmena
        </p>
      </EnlaceContainer>
      <BotonesContainer>
        <Button
          onClick={() => {
            setVista1(true);
            setVista2(false);
            setVista3(false);
          }}
        >
          <Audio />
        </Button>{" "}
        <Button
          onClick={() => {
            setVista1(false);
            setVista2(true);
            setVista3(false);
          }}
        >
          <Corazon />
        </Button>
        <Button
          onClick={() => {
            setVista1(false);
            setVista2(false);
            setVista3(true);
          }}
        >
          <Libro />
        </Button>
      </BotonesContainer>
      {vista1 === true && <VistaColmena1 />}
      {vista2 === true && <VistaColmena2 />}
      {vista3 === true && <VistaColmena3 />}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormAtrasButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/home");
          }}
        />
        <FormSiguienteButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/estadoGeneral");
            // handleSubmit(e);
          }}
        />
      </div>
    </Container>
  );
});
export default VistaColmenaData;
