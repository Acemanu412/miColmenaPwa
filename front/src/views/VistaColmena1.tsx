import React from "react";
import { observer } from "mobx-react";
import {
  DataContainer,
  DataRow2,
  DataRow,
  DataColumn,
  BoldText,
  Lightening,
  Balanza,
  Oreja,
  AbejaAmarilla,
  AbejaDormida,
} from "../styles/ColmenaStyles";

// Estas vistas son las 3 pestañas que se ven en el dashboard de una colmena específica. Esta es la pestaña izquierda.

const VistaColmena1 = observer(() => {
  return (
    <DataContainer>
      <DataRow>
        <DataColumn>
          <label>Actividad</label>
          <DataRow2>
            <BoldText>64 dB</BoldText>
            <Lightening />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label>Estabilidad</label>
          <DataRow2>
            <BoldText>64 %</BoldText>
            <Balanza />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label>Frecuencias Bajas</label>
          <DataRow2>
            <BoldText>64 dB</BoldText>
            <Oreja />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label>Frecuencias Altas</label>
          <DataRow2>
            <BoldText>64 dB</BoldText>
            <Oreja />
          </DataRow2>
        </DataColumn>
      </DataRow>
      <DataRow>
        <DataColumn>
          <label>Frecuencia Colmena</label>
          <DataRow2>
            <BoldText>64 %</BoldText>
            <AbejaAmarilla />
          </DataRow2>
        </DataColumn>
        <DataColumn>
          <label>Obreras activas</label>
          <DataRow2>
            <BoldText>64 %</BoldText>
            <AbejaDormida />
          </DataRow2>
        </DataColumn>
      </DataRow>
    </DataContainer>
  );
});
export default VistaColmena1;
