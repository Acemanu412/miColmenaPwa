import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Checkbox } from "../components/Checkbox";
import { RangeSlider } from "../components/RangeSlider";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";

import {
    FormAtrasButton,
    FormSiguienteButton
} from "../styles/FormStyles";


import {
  CelulasReina,
  CheckboxContainer,
  CheckboxesReina,
  EstadoReinaHuevos,
  RangeSlidersReina,
  RangeSliderText,
  ReinaContainer,
  ReinaText,
  ToggleSwitchContainer,
  ToggleSwitchsReina,
} from "../styles/ReinaStyles";
import { NavBar } from "./NavBar";

export const Reina: React.FC<RouteComponentProps> = (props) => {


  const reina = () => {
    store.updateReinaForm(inputsSalientes);
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(reina, {
    alasRotas: false,
    celulasReina: 0,
    huevosVistos: false,
    marcada: false,
    reinaPresente: false,
    removed: false,
    swarm: false,
  });

  return (
    <div>
      <NavBar />
      <ReinaContainer>
        <EstadoReinaHuevos reinaPresente={inputsSalientes.reinaPresente}>
          <ReinaText>Población de Colmena</ReinaText>
          <ToggleSwitchsReina>
            <ToggleSwitchContainer>
              <ToggleSwitch
                name="reinaPresente"
                handleInputChange={(e) => {
                  handleInputChange(e);
                  inputsSalientes.alasRotas = false;
                  inputsSalientes.marcada = false;
                }}
              />
              <strong>Reina Presente</strong>
            </ToggleSwitchContainer>
            <ToggleSwitchContainer>
              <ToggleSwitch
                name="huevosVistos"
                handleInputChange={handleInputChange}
              />
              <strong>Huevos Vistos</strong>
            </ToggleSwitchContainer>
          </ToggleSwitchsReina>
          {inputsSalientes.reinaPresente && (
            <CheckboxesReina>
              <CheckboxContainer>
                <Checkbox
                  name="alasRotas"
                  handleInputChange={handleInputChange}
                />
                <strong>Alas Rotas</strong>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  name="marcada"
                  handleInputChange={handleInputChange}
                />
                <strong>Marcada</strong>
              </CheckboxContainer>
            </CheckboxesReina>
          )}
        </EstadoReinaHuevos>
        <CelulasReina>
          <ReinaText>Células de Reina</ReinaText>
          <RangeSlidersReina>
            <RangeSlider
              min="0"
              max="5"
              value={inputsSalientes.celulasReina}
              name="celulasReina"
              handleInputChange={handleInputChange}
            />
            <RangeSliderText>{inputsSalientes.celulasReina}</RangeSliderText>
          </RangeSlidersReina>
          {inputsSalientes.celulasReina > 0 && (
            <ToggleSwitchsReina>
              <ToggleSwitchContainer>
                <ToggleSwitch
                  name="removed"
                  handleInputChange={handleInputChange}
                />
                <strong>Removed</strong>
              </ToggleSwitchContainer>
              <ToggleSwitchContainer>
                <ToggleSwitch
                  name="swarm"
                  handleInputChange={handleInputChange}
                />
                <strong>Swarm</strong>
              </ToggleSwitchContainer>
            </ToggleSwitchsReina>
          )}
        </CelulasReina>
        <FormAtrasButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/colmena");
          }}
        />
        <FormSiguienteButton
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/consejos");
            handleSubmit(e);
          }}
        />
      </ReinaContainer>
    </div>
  );
};
