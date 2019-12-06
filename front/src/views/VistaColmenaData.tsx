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

  const monday = moment()
    .startOf("isoWeek")
    .date()
    .toString();

  const tuesday = moment()
    .startOf("isoWeek")
    .add(1, "day")
    .date()
    .toString();

  const wednesday = moment()
    .startOf("isoWeek")
    .add(2, "day")
    .date()
    .toString();

  const thursday = moment()
    .startOf("isoWeek")
    .add(3, "day")
    .date()
    .toString();
  const friday = moment()
    .startOf("isoWeek")
    .add(4, "day")
    .date()
    .toString();
  const saturday = moment()
    .startOf("isoWeek")
    .add(5, "day")
    .date()
    .toString();
  const sunday = moment()
    .endOf("isoWeek")
    .date()
    .toString();

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
          <Mas />
        </Button2>
        <Button3>
          <Dia>
            <p>L</p> <p>{monday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>M</p> <p>{tuesday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>M</p> <p>{wednesday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>J </p> <p>{thursday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>V</p> <p>{friday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>S</p> <p>{saturday}</p>
          </Dia>
        </Button3>
        <Button3>
          <Dia>
            <p>D</p> <p>{sunday}</p>
          </Dia>
        </Button3>
        <Button2>
          <Menos />
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
