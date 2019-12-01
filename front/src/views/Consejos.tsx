import React from "react";

import { NavBar } from "./NavBar";
import { ConsejosContainer, Intervenciones, Alimento, Cosechas, ConsejosTexto, CosechaContainer, ValorCosecha, UnidadCosecha, InputCosecha, LabelCosecha, SelectCosecha, LabelUnidad, CheckboxContainer, LabelCheckbox, CheckboxConsejos } from "../styles/ConsejosStyles";
import { useForm } from "../hooks/formHook";

export const Consejos: React.FC = () => {

    const consejos = () => {
        alert("Submit datos consejos");
    }

    const { inputsSalientes, handleInputChange, handleSubmit } = useForm(consejos, {
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
            <ConsejosContainer>
                <ConsejosTexto>Intervenciones: Toca las que aplican</ConsejosTexto>
                <Intervenciones>
                    <CheckboxContainer>
                        Nueva Colmena
                        <CheckboxConsejos type="checkbox" name="nuevaColmena" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Abejas Agregadas
                        <CheckboxConsejos type="checkbox" name="abejasAgregadas" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Reina Agregada
                        <CheckboxConsejos type="checkbox" name="reinaAgregada" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Exclusor de Reina
                        <CheckboxConsejos type="checkbox" name="exclusorReina" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Colmena Dividida
                        <CheckboxConsejos type="checkbox" name="colmenaDividida" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Celdas Cambiadas
                        <CheckboxConsejos type="checkbox" name="celdasCambiadas" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Colmena Limpia
                        <CheckboxConsejos type="checkbox" name="colmenaLimpia" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Colmena con Aislante
                        <CheckboxConsejos type="checkbox" name="colmenaAislante" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Exclusor de Reina
                        <CheckboxConsejos type="checkbox" name="exclusorReina" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Exclusor de Reina2
                        <CheckboxConsejos type="checkbox" name="exclusorReina2" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Pantalla Abierta
                        <CheckboxConsejos type="checkbox" name="pantallaAbierta" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Nosema
                        <CheckboxConsejos type="checkbox" name="nosema" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Pantalla Cerrada
                        <CheckboxConsejos type="checkbox" name="pantallaCerrada" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Antivarroa
                        <CheckboxConsejos type="checkbox" name="antivarroa" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Otros Antivarroa
                        <CheckboxConsejos type="checkbox" name="otrosAntivarroa" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Med. Nosema
                        <CheckboxConsejos type="checkbox" name="medNosema" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Acarapisosis
                        <CheckboxConsejos type="checkbox" name="acarapisosis" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Med escara
                        <CheckboxConsejos type="checkbox" name="medEscara" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Antihongos
                        <CheckboxConsejos type="checkbox" name="antihongos" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Antibióticos
                        <CheckboxConsejos type="checkbox" name="antibioticos" />
                    </CheckboxContainer>
                </Intervenciones>
                <ConsejosTexto>Alimento: Toca las que aplican</ConsejosTexto>
                <Alimento>
                    <CheckboxContainer>
                        Jarabe Liviano
                        <CheckboxConsejos type="checkbox" name="jarabeLiviano" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Jarabe Espeso
                        <CheckboxConsejos type="checkbox" name="jarabeEspeso" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Mezcla Seca
                        <CheckboxConsejos type="checkbox" name="mezclaSeca" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Nueva Colmena
                        <CheckboxConsejos type="checkbox" name="nuevaColmena" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Agregar Abejas
                        <CheckboxConsejos type="checkbox" name="agregarAbejas" />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        Agregar Reina
                        <CheckboxConsejos type="checkbox" name="agregarReina" />
                    </CheckboxContainer>
                </Alimento>
                <ConsejosTexto>Cosecha</ConsejosTexto>
                <Cosechas>
                    <CosechaContainer>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Miel</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="cuadros">cuadros</option>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Jalea Real</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="g">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Polen</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="g">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Propoleo</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="g">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Cera</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="g">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " />
                            <LabelCosecha>Panal</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha>
                                <option value="cuadros">cuadros</option>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                    </CosechaContainer>
                </Cosechas>
            </ConsejosContainer>
        </div>
    )
}
