import { times } from "lodash";
import { observer } from "mobx-react";
import moment from "moment";
import React, { useState } from "react";

import { fetchDataDevice } from "../api";
import { fetchRegistros } from "../api";

import { useStores } from "../hooks/useStore";
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
import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";
import { NavBar } from "./NavBar";
import VistaColmena1 from "./VistaColmena1";
import VistaColmena2 from "./VistaColmena2";
import VistaColmena3 from "./VistaColmena3";

const VistaColmenaData = observer((props) => {
  const store = useStores();


  console.log(store.currentDay, "holaaa");
  const [vista1, setVista1] = useState(true);
  const [vista2, setVista2] = useState(false);
  const [vista3, setVista3] = useState(false);
  const [dates, setDates] = useState(() =>
    times(7, (i) =>
      moment()
        .startOf("isoWeek")
        .add(i, "day")
    )
  );
  const [selected, setSelected] = useState(() => {
    const today = moment().date();
    return dates.findIndex((d) => d.date() === today);
  });
  const addWeek = () => {
    const newDates = times(7, (i) => dates[i].add(7, "day"));
    setDates(newDates);
  };
  const takeWeek = () => {
    const newDates = times(7, (i) => dates[i].subtract(7, "day"));
    setDates(newDates);
  };

  const dias = ["L", "M", "M", "J", "V", "S", "D"];
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <Container>
      <NavBar />
      {store.user || (!store.user && store.isFetchingUser) ? (
        <div>
          <Header>
            <Abejas />
            <ProfileContainer>
              <NameContainer>
                <p>{store.colmena.nombre}</p>
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
          <EnlaceContainer>
            {`${dates[selected].date()} de ${
              month[dates[selected].month()]
              } de ${dates[selected].year()}`}
          </EnlaceContainer>
          <SemanaContainer>
            <Button2>
              <Menos onClick={takeWeek} />
            </Button2>

            {dates.map((day, index) => {
              const now = `${day.date()}-${day.month() + 1}-${day.year()}`;
              return (
                <Button3
                  selected={index === selected}
                  key={`id-${index}`}
                  onClick={() => {
                    setSelected(index);
                    fetchDataDevice(
                      props.match.params.id,
                      day
                    ).then((inputDevice) =>
                      store.updateInputDevice(inputDevice)
                    );
                    store.setCurrentDay(now);
                    store.setCheckCC(false);
                  }}
                >
                  <Dia>
                    <p>{dias[index]}</p> <p>{day.date()}</p>
                  </Dia>
                </Button3>
              );
            })}
            <Button2>
              <Mas onClick={addWeek} />
            </Button2>
          </SemanaContainer>
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
                store.inputDevice ? setVista2(true) : setVista2(false);
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              justifySelf: "flex-end",
              margin: "auto 0 ",
            }}
          >
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
              }}
            />
          </div>
        </div>
      ) : (
          <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>
        )}
    </Container>
  );
});
export default VistaColmenaData;
