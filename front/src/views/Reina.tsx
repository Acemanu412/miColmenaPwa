import React from "react";
import { NavBar } from "./NavBar";
import { Checkbox } from "../components/Checkbox";
import { ToggleSwitch } from "../components/ToggleSwitch";
import {
    ReinaContainer,
    EstadoReinaHuevos,
    CelulasReina,
    ToggleSwitchsReina,
    CheckboxesReina,
    RangeSlidersReina,
    ToggleSwitchContainer,
    CheckboxContainer,
    RangeSliderText,
    ReinaText
} from "../styles/ReinaStyles";
import { RangeSlider } from "../components/RangeSlider";
import { useForm } from "../hooks/formHook";

export const Reina: React.FC = () => {

    const reina = () => {
        alert("Submit datos reina");
    }

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(reina, {
        reinaPresente: false,
        huevosVistos: false,
        alasRotas: false,
        marcada: false,
        celulasReina: 0,
        removed: false,
        swarm: false
    });

    return (
        <div>
            <NavBar />
            <ReinaContainer>
                <EstadoReinaHuevos reinaPresente={inputsSalientes.reinaPresente}>
                    <ReinaText>Población de Colmena</ReinaText>
                    <ToggleSwitchsReina>
                        <ToggleSwitchContainer>
                            <ToggleSwitch name="reinaPresente" handleInputChange={handleInputChange} />
                            <strong>Reina Presente</strong>
                        </ToggleSwitchContainer>
                        <ToggleSwitchContainer>
                            <ToggleSwitch name="huevosVistos" handleInputChange={handleInputChange} />
                            <strong>Huevos Vistos</strong>
                        </ToggleSwitchContainer>
                    </ToggleSwitchsReina>
                    {inputsSalientes.reinaPresente &&
                        <CheckboxesReina>
                            <CheckboxContainer>
                                <Checkbox name="alasRotas" handleInputChange={handleInputChange} />
                                <strong>Alas Rotas</strong>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox name="marcada" handleInputChange={handleInputChange} />
                                <strong>Marcada</strong>
                            </CheckboxContainer>
                        </CheckboxesReina>}
                </EstadoReinaHuevos>
                <CelulasReina>
                    <ReinaText>Células de Reina</ReinaText>
                    <RangeSlidersReina>
                        <RangeSlider min="0" max="5" value={inputsSalientes.celulasReina} name="celulasReina" handleInputChange={handleInputChange} />
                        <RangeSliderText>{inputsSalientes.celulasReina}</RangeSliderText>
                    </RangeSlidersReina>
                    {inputsSalientes.celulasReina > 0 &&
                        <ToggleSwitchsReina>
                            <ToggleSwitchContainer>
                                <ToggleSwitch name="removed" handleInputChange={handleInputChange} />
                                <strong>Removed</strong>
                            </ToggleSwitchContainer>
                            <ToggleSwitchContainer>
                                <ToggleSwitch name="swarm" handleInputChange={handleInputChange} />
                                <strong>Swarm</strong>
                            </ToggleSwitchContainer>
                        </ToggleSwitchsReina>}
                </CelulasReina>
            </ReinaContainer>
        </div>

    );
};
