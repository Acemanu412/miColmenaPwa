import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Checkbox } from "../components/Checkbox";
import { RangeSlider } from "../components/RangeSlider";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useForm } from "../hooks/formHook";
import { useStores } from "../hooks/useStore";

import { FormAtrasButton, FormSiguienteButton } from "../styles/FormStyles";

import {
  CelulasReina,
  CheckboxesReina,
  EstadoReinaHuevos,
  FooterBtns,
  PanelDiv,
  PanelHR,
  PanelImg,
  PanelText,
  RangeSlidersReina,
  RangeSliderText,
  ReinaCheckboxContainer,
  ReinaContainer,
  ReinaGreyText,
  ReinaGreyTextCheckBox,
  ReinaText,
  ToggleSwitchContainer,
  ToggleSwitchsReina,
} from "../styles/ReinaStyles";
import { NavBar } from "./NavBar";

export const Reina: React.FC<RouteComponentProps> = observer((props) => {
  const store = useStores();
  const reina = () => {
    store.updateReinaForm(inputsSalientes);
  };

  const { inputsSalientes, handleInputChange, handleSubmit } = useForm(reina, {
    alasRotas: false,
    celulasReina: "0",
    huevosVistos: false,
    marcada: false,
    reinaPresente: false,
    removed: false,
    swarm: false,
  });

  return (
    <div>
      <NavBar />
      {store.user || (!store.user && store.isFetchingUser) ?
        <div>
          <PanelDiv >
            <PanelImg />
            <PanelText>Reina</PanelText>
          </PanelDiv>
          <PanelHR />
          <ReinaContainer>
            <EstadoReinaHuevos reinaPresente={inputsSalientes.reinaPresente}>
              <ReinaText>Población</ReinaText>
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
                  <ReinaGreyText>Reina Presente</ReinaGreyText>
                </ToggleSwitchContainer>
                <ToggleSwitchContainer>
                  <ToggleSwitch
                    name="huevosVistos"
                    handleInputChange={handleInputChange}
                  />
                  <ReinaGreyText>Huevos Vistos</ReinaGreyText>
                </ToggleSwitchContainer>
              </ToggleSwitchsReina>
              {inputsSalientes.reinaPresente && (
                <CheckboxesReina>
                  <ReinaCheckboxContainer>
                    <Checkbox
                      name="alasRotas"
                      handleInputChange={handleInputChange}
                    />
                    <ReinaGreyTextCheckBox>Alas Rotas</ReinaGreyTextCheckBox>
                  </ReinaCheckboxContainer>
                  <ReinaCheckboxContainer>
                    <Checkbox
                      name="marcada"
                      handleInputChange={handleInputChange}
                    />
                    <ReinaGreyTextCheckBox>Marcada</ReinaGreyTextCheckBox>
                  </ReinaCheckboxContainer>
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
                    <ReinaGreyText>Removed</ReinaGreyText>
                  </ToggleSwitchContainer>
                  <ToggleSwitchContainer>
                    <ToggleSwitch
                      name="swarm"
                      handleInputChange={handleInputChange}
                    />
                    <ReinaGreyText>Swarm</ReinaGreyText>
                  </ToggleSwitchContainer>
                </ToggleSwitchsReina>
              )}
            </CelulasReina>
            <FooterBtns>
              <FormAtrasButton
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/colmenas");
                }}
              />
              <FormSiguienteButton
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push("/consejos");
                  handleSubmit(e);
                }}
              />
            </FooterBtns>
          </ReinaContainer>
        </div>
        : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
    </div>
  );
});
