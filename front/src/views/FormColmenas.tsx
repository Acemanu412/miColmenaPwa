import React from "react";
import { NavBar } from "./NavBar";

import { RouteComponentProps } from "react-router-dom";

import { RangeSlider } from "../components/RangeSlider";
import { useFormColmenas } from "../hooks/formColmenasHook";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";
import {
  FormAtrasButton,
  FormSiguienteButton,
} from "../styles/FormStyles";

import {
  CheckboxContainer,
  CheckboxFormColmenas,
  CheckboxText,
  FormColmenasContainer,
  Intervenciones,
  RangeSliderColmenas,
  Text,
} from "../styles/FormColmenasStyles";

export const FormColmenas: React.FC<RouteComponentProps> = (props) => {

  const store = useStores();
  console.log(store)

  const formColmenas = () => {
    store.updateColmenasForm(inputsSalientes, inputsSalientesIntervenciones);
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(formColmenas, {
    calidadCrias: 0,
    comportamiento: 0,
    numeroComidas: 0,
    // numeroCuadrosTotalesCrias: 0,
    // numeroCuadroTotalesMiel: 0,
    poblacion: 0,
  });


  const problemasSalud = () => {
    alert("Submit datos problemasSalud");
  };

  const {
    handleInputIntervencionesChange,
    inputsSalientesIntervenciones,
  }: any = useFormColmenas(problemasSalud);

  return (
    <div>
      <NavBar />
      <FormColmenasContainer>

        <RangeSliderColmenas>
          <Text>Poblacion</Text>
          <RangeSlider
            min="0"
            max="5"
            value={inputsSalientes.poblacion}
            name="poblacion"
            handleInputChange={handleInputChange}>
          </RangeSlider>
        </RangeSliderColmenas>

        <RangeSliderColmenas>
          <Text>Comportamiento</Text>
          <RangeSlider
            min="0"
            max="5"
            value={inputsSalientes.comportamiento}
            name="comportamiento"
            handleInputChange={handleInputChange}>
          </RangeSlider>
        </RangeSliderColmenas>

        <RangeSliderColmenas>
          <Text>Calidad crias</Text>
          <RangeSlider
            min="0"
            max="5"
            value={inputsSalientes.calidadCrias}
            name="calidadCrias"
            handleInputChange={handleInputChange}>
          </RangeSlider>
        </RangeSliderColmenas>

        <RangeSliderColmenas>
          <Text>Numero de comidas</Text>
          <RangeSlider
            min="0"
            max="5"
            value={inputsSalientes.numeroComidas}
            name="numeroComidas"
            handleInputChange={handleInputChange}>
          </RangeSlider>
        </RangeSliderColmenas>

        <CheckboxText>Problemas de salud: Toca las que correspondan</CheckboxText>

        <Intervenciones>
          <CheckboxContainer activo={inputsSalientesIntervenciones.numeroDeComidas}>
            Numero de comidas
            <CheckboxFormColmenas type="checkbox" name="numeroDeComidas" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.pupaComidas}>
            Pupa Comidas
            <CheckboxFormColmenas type="checkbox" name="pupaComidas" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.alasDeformadas}>
            Alas deformadas
            <CheckboxFormColmenas type="checkbox" name="alasDeformadas" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.varroas}>
            Varroas
            <CheckboxFormColmenas type="checkbox" name="varroas" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.polillasDeCera}>
            Polillas de cera
            <CheckboxFormColmenas type="checkbox" name="polillasDeCera" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.acarapisosis}>
            Acarapisosis
            <CheckboxFormColmenas type="checkbox" name="acarapisosis" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.pupasPicadas}>
            Pupas picadas
            <CheckboxFormColmenas type="checkbox" name="pupasPicadas" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.acarosBarroa}>
            Acaros Barroa
            <CheckboxFormColmenas type="checkbox" name="acarosBarroa" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.mesesDeCera}>
            Meses de cera
            <CheckboxFormColmenas type="checkbox" name="mesesDeCera" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.nosema}>
            Nosema
            <CheckboxFormColmenas type="checkbox" name="nosema" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.paralisisCronica}>
            Paralisis cronica
            <CheckboxFormColmenas type="checkbox" name="paralisisCronica" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.escarabajos}>
            Escarabajos
            <CheckboxFormColmenas type="checkbox" name="escarabajos" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.tropilaelapsosis}>
            Tropila-
            elapsosis
            <CheckboxFormColmenas type="checkbox" name="tropilaelapsosis" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.criaDePiedra}>
            Cria de piedra
            <CheckboxFormColmenas type="checkbox" name="criaDePiedra" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.criaCalcarea}>
            Cria calcarea
            <CheckboxFormColmenas type="checkbox" name="criaCalcarea" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.moho}>
            Moho
            <CheckboxFormColmenas type="checkbox" name="moho" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.loqueAmericana}>
            Loque Americana
            <CheckboxFormColmenas type="checkbox" name="loqueAmericana" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
          <CheckboxContainer activo={inputsSalientesIntervenciones.loqueEuropea}>
            Loque Europea
            <CheckboxFormColmenas type="checkbox" name="loqueEuropea" onChange={handleInputIntervencionesChange} />
          </CheckboxContainer>
        </Intervenciones>

        <h1>hola</h1>

        <FormAtrasButton onClick={(e) => {
          e.preventDefault();
          props.history.push("/colmena");
          console.log(props)
        }} />
        <FormSiguienteButton onClick={(e) => {
          e.preventDefault();
          props.history.push("/reina");
          handleSubmit(e);
        }} />

      </FormColmenasContainer>
    </div>
  );
};