import React from "react";
import { NavBar } from "./NavBar";

import { RouteComponentProps } from "react-router-dom";

import { RangeSlider } from "../components/RangeSlider";
import { useFormColmenas } from "../hooks/formColmenasHook";

import { useStores } from "../hooks/useStore";
import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";

import {
  BoldText,
  CheckboxContainer,
  CheckboxFormColmenas,
  ContentText,
  FormColmenasContainer,
  Header,
  Intervenciones,
  Panel,
  RangeSliderColmenas,
  Text,
  TextCantidad,
  TextGray,
} from "../styles/FormColmenasStyles";

export const FormColmenas: React.FC<RouteComponentProps> = (props) => {
  const store = useStores();
  const formColmenas = () => {
    store.updateColmenasForm(inputsSalientes);
  };

  const {
    inputsSalientes,
    handleInputChange,
    handleSubmit,
  }: any = useFormColmenas(formColmenas, {
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

        <Intervenciones>
          <CheckboxContainer activo={inputsSalientes.numeroDeComidas}>
            Numero de comidas
            <CheckboxFormColmenas
              type="checkbox"
              name="numeroDeComidas"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.pupaComidas}>
            Pupa Comidas
            <CheckboxFormColmenas
              type="checkbox"
              name="pupaComidas"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.alasDeformadas}>
            Alas deformadas
            <CheckboxFormColmenas
              type="checkbox"
              name="alasDeformadas"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.varroas}>
            Varroas
            <CheckboxFormColmenas
              type="checkbox"
              name="varroas"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.polillasDeCera}>
            Polillas de cera
            <CheckboxFormColmenas
              type="checkbox"
              name="polillasDeCera"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.acarapisosis}>
            Acarapisosis
            <CheckboxFormColmenas
              type="checkbox"
              name="acarapisosis"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.pupasPicadas}>
            Pupas picadas
            <CheckboxFormColmenas
              type="checkbox"
              name="pupasPicadas"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.acarosBarroa}>
            Acaros Barroa
            <CheckboxFormColmenas
              type="checkbox"
              name="acarosBarroa"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.mesesDeCera}>
            Meses de cera
            <CheckboxFormColmenas
              type="checkbox"
              name="mesesDeCera"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.nosema}>
            Nosema
            <CheckboxFormColmenas
              type="checkbox"
              name="nosema"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.paralisisCronica}>
            Paralisis cronica
            <CheckboxFormColmenas
              type="checkbox"
              name="paralisisCronica"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.escarabajos}>
            Escarabajos
            <CheckboxFormColmenas
              type="checkbox"
              name="escarabajos"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.tropilaelapsosis}>
            Tropila- elapsosis
            <CheckboxFormColmenas
              type="checkbox"
              name="tropilaelapsosis"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.criaDePiedra}>
            Cria de piedra
            <CheckboxFormColmenas
              type="checkbox"
              name="criaDePiedra"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.criaCalcarea}>
            Cria calcarea
            <CheckboxFormColmenas
              type="checkbox"
              name="criaCalcarea"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.moho}>
            Moho
            <CheckboxFormColmenas
              type="checkbox"
              name="moho"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.loqueAmericana}>
            Loque Americana
            <CheckboxFormColmenas
              type="checkbox"
              name="loqueAmericana"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientes.loqueEuropea}>
            Loque Europea
            <CheckboxFormColmenas
              type="checkbox"
              name="loqueEuropea"
              onChange={handleInputChange}
            />
          </CheckboxContainer>
        </Intervenciones>

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
  );
};
