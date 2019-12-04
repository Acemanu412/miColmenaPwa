import React from "react";
import { observer } from "mobx-react";
import {
  DataContainer,
  DataRow2,
  DataRow,
  DataColumn,
  BoldText,
  Termometro,
  Escala,
  WiFi,
  PresionAtm,
  Viento,
  DireccionViento,
  Bateria,
  Gotas,
  Ubicacion,
  Sol,
} from "../styles/ColmenaStyles";

const VistaColmena2 = observer(() => {
  return (
    <DataContainer>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Temp. Colmena</label>
          <DataRow2>
            <BoldText>28°C</BoldText>
            <Termometro />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Humedad de Colmena</label>
          <DataRow2>
            <BoldText>64 %</BoldText>
            <Gotas />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Peso</label>
          <DataRow2>
            <BoldText>1 Kg</BoldText>
            <Escala />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Localización</label>
          <DataRow2>
            <BoldText>
              Lat: 1.396389,
              <br /> lon: -78.424722
            </BoldText>
            <Ubicacion />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Intensidad de Señal</label>
          <DataRow2>
            <BoldText>-64 mmHg</BoldText>
            <WiFi />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Nivel Bateria</label>
          <DataRow2>
            <BoldText>34 %</BoldText>
            <Bateria />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <label style={{ paddingTop: "2%", paddingBottom: "2%" }}>
        Registra tus inspecciones
      </label>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Temp. Externa</label>
          <DataRow2>
            <BoldText>27°C</BoldText>
            <Termometro />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Humedad Externa</label>
          <DataRow2>
            <BoldText>57 %</BoldText>
            <Gotas />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Presión Atmosférica</label>
          <DataRow2>
            <BoldText>64 °C</BoldText>
            <PresionAtm />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Clima</label>
          <DataRow2>
            <BoldText>Cielo despejado</BoldText>
            <Sol />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Velocidad de Viento</label>
          <DataRow2>
            <BoldText>1 m/s</BoldText>
            <Viento />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Dirección de Viento</label>
          <DataRow2>
            <BoldText>100</BoldText>
            <DireccionViento />
          </DataRow2>
        </DataColumn>
      </DataRow>
    </DataContainer>
  );
});
export default VistaColmena2;
