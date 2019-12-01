import React from "react";

import { NavBar } from "./NavBar";
import { ConsejosContainer, Intervenciones, Alimento, Cosechas, ConsejosTexto, Cuadro, CosechaContainer, ValorCosecha, UnidadCosecha, InputCosecha, LabelCosecha, SelectCosecha, LabelUnidad } from "../styles/ConsejosStyles";

export const Consejos: React.FC = () => {

    const consejos = () => {
        alert("Submit datos consejos");
    }


    return (
        <div>
            <NavBar />
            <ConsejosContainer>
                <ConsejosTexto>Intervenciones: Toca las que aplican</ConsejosTexto>
                <Intervenciones>
                    <Cuadro>Nueva Colmena</Cuadro>
                    <Cuadro>Abejas Agregadas</Cuadro>
                    <Cuadro>Reina Agregada</Cuadro>
                    <Cuadro>Exclusor de Reina</Cuadro>
                    <Cuadro>Colmena Dividida</Cuadro>
                    <Cuadro>Celdas Cambiadas</Cuadro>
                    <Cuadro>Colmena Limpia</Cuadro>
                    <Cuadro>Colmena con Aislante</Cuadro>
                    <Cuadro>Exclusor de Reina</Cuadro>
                    <Cuadro>Exclusor de Reina</Cuadro>
                    <Cuadro>Pantalla Abierta</Cuadro>
                    <Cuadro>Nosema</Cuadro>
                    <Cuadro>Pantalla Cerrada</Cuadro>
                    <Cuadro>Antivarroa</Cuadro>
                    <Cuadro>Otros Antivarroa</Cuadro>
                    <Cuadro>Med. Nosema</Cuadro>
                    <Cuadro>Acarapisosis</Cuadro>
                    <Cuadro>Med escara.</Cuadro>
                    <Cuadro>Antihongos</Cuadro>
                    <Cuadro>Antibióticos</Cuadro>
                </Intervenciones>
                <ConsejosTexto>Alimento: Toca las que aplican</ConsejosTexto>
                <Alimento>
                    <Cuadro>Jarabe Liviano</Cuadro>
                    <Cuadro>Jarabe Espeso</Cuadro>
                    <Cuadro>Mezcla Seca</Cuadro>
                    <Cuadro>Nueva Colmena</Cuadro>
                    <Cuadro>Agregar Abejas</Cuadro>
                    <Cuadro>Agregar Reina</Cuadro>
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
