import { observer } from "mobx-react";
import React from "react";

import { useStores } from "../hooks/useStore";
import {
  Bateria,
  BoldText,
  DataColumn,
  DataContainer,
  DataRow,
  DataRow2,
  DireccionViento,
  Escala,
  Gotas,
  PresionAtm,
  Sol,
  Termometro,
  Ubicacion,
  Viento,
  WiFi,
} from "../styles/ColmenaStyles";

const VistaColmena2 = observer(() => {
  const store = useStores();

  const inputDevice = store.inputDevice;

  return (
    <DataContainer>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Temp. Colmena</label>
          <DataRow2>
            <BoldText>{inputDevice.temperaturaInterior}°C</BoldText>
            <Termometro />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Humedad de Colmena</label>
          <DataRow2>
            <BoldText>{inputDevice.humedadInterior}%</BoldText>
            <Gotas />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Peso</label>
          <DataRow2>
            <BoldText>{Math.round((inputDevice.pesoUno + inputDevice.pesoDos + inputDevice.pesoTres
              + inputDevice.pesoCuatro) * 100) / 100}kg</BoldText>
            <Escala />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label style={{ fontSize: "0.8rem" }}>Localización</label>
          <DataRow2>
            <BoldText>
              Lat: {inputDevice.latitud},
              <br /> Lon: {inputDevice.longitud}
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
        Datos meteorológicos
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
