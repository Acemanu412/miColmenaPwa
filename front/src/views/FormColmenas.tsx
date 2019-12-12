import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RangeSlider } from "../components/RangeSlider";
import { useFormColmenas } from "../hooks/formColmenasHook";
import { useStores } from "../hooks/useStore";
import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";
import { NavBar } from "./NavBar";

import {
  BoldText,
  CheckboxContainer,
  CheckboxFormColmenas,
  ContentText,
  Enfermedades,
  FormColmenasContainer,
  Header,
  Panel,
  RangeSliderColmenas,
  Text,
  TextCantidad,
  TextGray,
} from "../styles/FormColmenasStyles";

const EnfermedadesArr = ["AcarosBarroa", "AlasDeformadas", "CalidadCrias", "Comportamiento", "CriaCalcarea",
  "CriaDePiedra", "Escarabajos", "LoqueAmericana", "LoqueEuropea", "MesesDeCera", "Moho", "Nosema",
  "NumeroComidas", "NumeroDeComidas", "ParalisisCronica", "Poblacion", "PolillasDeCera", "PupaComidas",
  "PupasPicadas", "Tropilaelapsosis", "Varroas"];

function ObjectConverter(array, startValue) {
  const newObj = {};
  for (const element of array) {
    newObj[element] = startValue;
  }
  return newObj;
}

const EnfermedadesObj = ObjectConverter(EnfermedadesArr, false);

export const FormColmenas: React.FC<RouteComponentProps> = observer((props) => {
  const store = useStores();
  const formColmenas = () => {
    store.updateColmenasForm(inputsSalientes);
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit,
  }: any = useFormColmenas(formColmenas, {
    ...EnfermedadesObj,
    calidadCrias: "0",
    comportamiento: "0",
    numeroComidas: "0",
    numeroCuadrosTotalesCrias: "0",
    numeroCuadrosTotalesMiel: "0",
    poblacion: "0",
  });

  return (
    <div>
      <NavBar />
      {store.user || (!store.user && store.isFetchingUser) ?
        <div>
          <div>
            <Header>
              <Panel />
              <BoldText>Colmena</BoldText>
            </Header>
          </div>
          <FormColmenasContainer>
            <RangeSliderColmenas>
              <Text>Poblacion</Text>
              <RangeSlider
                min="0"
                max="5"
                value={inputsSalientes.poblacion}
                name="poblacion"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <ContentText>
              <TextGray>Vacia</TextGray>
              <TextCantidad>{inputsSalientes.poblacion}/5</TextCantidad>
              <TextGray>Llena</TextGray>
            </ContentText>

            <RangeSliderColmenas>
              <Text>Comportamiento</Text>
              <RangeSlider
                min="0"
                max="5"
                value={inputsSalientes.comportamiento}
                name="comportamiento"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <ContentText>
              <TextGray>Calmo</TextGray>
              <TextCantidad>{inputsSalientes.comportamiento}/5</TextCantidad>
              <TextGray>Agresivo</TextGray>
            </ContentText>

            <RangeSliderColmenas>
              <Text>Calidad crias</Text>
              <RangeSlider
                min="0"
                max="5"
                value={inputsSalientes.calidadCrias}
                name="calidadCrias"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <ContentText>
              <TextGray>Sin crias</TextGray>
              <TextCantidad>{inputsSalientes.calidadCrias}/5</TextCantidad>
              <TextGray>Crias estables</TextGray>
            </ContentText>

            <RangeSliderColmenas>
              <Text>Numero de cuadros totales</Text>
              <RangeSlider
                min="0"
                max="40"
                value={inputsSalientes.numeroCuadrosTotalesCrias}
                name="numeroCuadrosTotalesCrias"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <ContentText>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextGray>Crias:</TextGray>
                <TextCantidad>
                  {inputsSalientes.numeroCuadrosTotalesCrias}
                </TextCantidad>
              </div>
              <TextGray>Max.40</TextGray>
            </ContentText>

            <RangeSliderColmenas>
              <RangeSlider
                min="0"
                max="40"
                value={inputsSalientes.numeroCuadrosTotalesMiel}
                name="numeroCuadrosTotalesMiel"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <ContentText>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextGray>Miel:</TextGray>
                <TextCantidad>
                  {inputsSalientes.numeroCuadrosTotalesMiel}
                </TextCantidad>
              </div>
              <TextGray>Max.40</TextGray>
            </ContentText>

            <RangeSliderColmenas>
              <Text>Numero de comidas</Text>
              <RangeSlider
                min="0"
                max="40"
                value={inputsSalientes.numeroComidas}
                name="numeroComidas"
                handleInputChange={handleInputChange}
              ></RangeSlider>
            </RangeSliderColmenas>
            <div>
              <TextCantidad style={{ justifyContent: "space-around" }}>
                {inputsSalientes.numeroComidas}/5
          </TextCantidad>
            </div>

            <TextGray>Problemas de salud: Toca las que correspondan</TextGray>

            <Enfermedades>
              {EnfermedadesArr.map(((enfermedad, index) => {
                const elemento = enfermedad.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                return <CheckboxContainer key={index} activo={inputsSalientes[enfermedad]}>
                  {elemento}
                  <CheckboxFormColmenas type="checkbox"
                    name={enfermedad}
                    onChange={(e) => { handleInputChange(e) }} />
                </CheckboxContainer>;
              }
              ))}
            </Enfermedades>

            <TextCantidad></TextCantidad>

            <TextCantidad></TextCantidad>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FormAtrasButton
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/estadoGeneral");
                }}
              />
              <FormSiguienteButton
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/reina");
                  handleSubmit(e);
                }}
              />
            </div>
          </FormColmenasContainer>
        </div>
        : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
    </div>
  );
});
