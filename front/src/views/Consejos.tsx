import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useForm } from "../hooks/formConsejosHook";
import { useStores } from "../hooks/useStore";
import {
    Alimento,
    CheckboxConsejos,
    CheckboxContainer,
    ConsejosContainer,
    ConsejosTexto,
    CosechaContainer,
    Cosechas,
    InputCosecha,
    Intervenciones,
    LabelCosecha,
    LabelUnidad,
    SelectCosecha,
    UnidadCosecha,
    ValorCosecha,
} from "../styles/ConsejosStyles";
import { FormAtrasButton,
         FormSiguienteButton } from "../styles/FormStyles";
import { NavBar } from "./NavBar";

export const Consejos: React.FC<RouteComponentProps> = (props) => {
    const store = useStores();
    const consejos = () => {
     store.updateConsejos(inputsSalientesIntervenciones,
                          inputsSalientesAlimento,
                          inputsSalientesCosecha);
    };

    const { inputsSalientesIntervenciones,
            inputsSalientesAlimento,
            inputsSalientesCosecha,
            handleInputIntervencionesChange,
            handleInputAlimentoChange,
            handleInputCosechaChange,
            handleSubmit }: any = useForm(consejos);

    return (
        <div>
            <NavBar />
            <ConsejosContainer>
                <ConsejosTexto>Intervenciones: Toca las que aplican</ConsejosTexto>
                <Intervenciones>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.nuevaColmena}>
                        Nueva Colmena
                        <CheckboxConsejos type="checkbox"
                                          name="nuevaColmena"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.abejsAgregadas}>
                        Abejas Agregadas
                        <CheckboxConsejos type="checkbox"
                                          name="abejasAgregadas"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.reinaAgregada}>
                        Reina Agregada
                        <CheckboxConsejos type="checkbox"
                                          name="reinaAgregada"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.exclusorReina}>
                        Exclusor de Reina
                        <CheckboxConsejos type="checkbox"
                                          name="exclusorReina"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.colmenaDividida}>
                        Colmena Dividida
                        <CheckboxConsejos type="checkbox"
                                          name="colmenaDividida"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.celdasCambiadas}>
                        Celdas Cambiadas
                        <CheckboxConsejos type="checkbox"
                                          name="celdasCambiadas"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.colmenaLimpia}>
                        Colmena Limpia
                        <CheckboxConsejos type="checkbox"
                                          name="colmenaLimpia"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.colmenaAislante}>
                        Colmena con Aislante
                        <CheckboxConsejos type="checkbox"
                                          name="colmenaAislante"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.exclusorReina2}>
                        Exclusor de Reina
                        <CheckboxConsejos type="checkbox"
                                          name="exclusorReina2"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.exclusorReina3}>
                        Exclusor de Reina2
                        <CheckboxConsejos type="checkbox"
                                          name="exclusorReina3"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.pantallaAbierta}>
                        Pantalla Abierta
                        <CheckboxConsejos type="checkbox"
                                          name="pantallaAbierta"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.nosema}>
                        Nosema
                        <CheckboxConsejos type="checkbox"
                                          name="nosema"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.pantallaCerrada}>
                        Pantalla Cerrada
                        <CheckboxConsejos type="checkbox"
                                          name="pantallaCerrada"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.antivarroa}>
                        Antivarroa
                        <CheckboxConsejos type="checkbox"
                                          name="antivarroa"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.otrosAntivarroa}>
                        Otros Antivarroa
                        <CheckboxConsejos type="checkbox"
                                          name="otrosAntivarroa"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.medNosema}>
                        Med. Nosema
                        <CheckboxConsejos type="checkbox"
                                          name="medNosema"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.acarapisosis}>
                        Acarapisosis
                        <CheckboxConsejos type="checkbox"
                                          name="acarapisosis"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.medEscara}>
                        Med escara
                        <CheckboxConsejos type="checkbox"
                                          name="medEscara"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.antihongos}>
                        Antihongos
                        <CheckboxConsejos type="checkbox"
                                          name="antihongos"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesIntervenciones.antibioticos}>
                        Antibióticos
                        <CheckboxConsejos type="checkbox"
                                          name="antibioticos"
                                          onChange={handleInputIntervencionesChange} />
                    </CheckboxContainer>
                </Intervenciones>
                <ConsejosTexto>Alimento: Toca las que aplican</ConsejosTexto>
                <Alimento>
                    <CheckboxContainer activo={inputsSalientesAlimento.jarabeLiviano}>
                        Jarabe Liviano
                        <CheckboxConsejos type="checkbox"
                                          name="jarabeLiviano"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesAlimento.jarabeEspeso}>
                        Jarabe Espeso
                        <CheckboxConsejos type="checkbox"
                                          name="jarabeEspeso"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesAlimento.mezclaSeca}>
                        Mezcla Seca
                        <CheckboxConsejos type="checkbox"
                                          name="mezclaSeca"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesAlimento.nuevaColmena}>
                        Nueva Colmena
                        <CheckboxConsejos type="checkbox"
                                          name="nuevaColmena"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesAlimento.agregarAbejas}>
                        Agregar Abejas
                        <CheckboxConsejos type="checkbox"
                                          name="agregarAbejas"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                    <CheckboxContainer activo={inputsSalientesAlimento.agregarReina}>
                        Agregar Reina
                        <CheckboxConsejos type="checkbox"
                                          name="agregarReina"
                                          onChange={handleInputAlimentoChange} />
                    </CheckboxContainer>
                </Alimento>
                <ConsejosTexto>Cosecha</ConsejosTexto>
                <Cosechas>
                    <CosechaContainer>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="miel" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-miel"] = !inputsSalientesCosecha["unidad-miel"] ? "cuadros" : "";
                            }} />
                            <LabelCosecha>Miel</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-miel" onChange={handleInputCosechaChange}>
                                <option value="cuadros">cuadros</option>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="jaleaReal" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-jaleaReal"] =
                                !inputsSalientesCosecha["unidad-jaleaReal"] ? "kg"
                                                                            : "";
                            }} />
                            <LabelCosecha>Jalea Real</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-jaleaReal" onChange={handleInputCosechaChange}>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="oz">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="polen" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-polen"] =
                                !inputsSalientesCosecha["unidad-polen"] ? "kg"
                                                                        : "";
                            }} />
                            <LabelCosecha>Polen</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-polen" onChange={handleInputCosechaChange}>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="oz">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="propoleo" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-propoleo"] = !inputsSalientesCosecha["unidad-propoleo"] ? "kg" : "";
                            }} />
                            <LabelCosecha>Propoleo</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-propoleo" onChange={handleInputCosechaChange}>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="oz">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="cera" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-cera"] = !inputsSalientesCosecha["unidad-cera"] ? "kg" : "";
                            }} />
                            <LabelCosecha>Cera</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-cera" onChange={handleInputCosechaChange}>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                                <option value="g">g</option>
                                <option value="oz">oz</option>
                            </SelectCosecha>
                            <LabelUnidad>Unidades</LabelUnidad>
                        </UnidadCosecha>
                        <ValorCosecha>
                            <InputCosecha placeholder=" " name="panal" onChange={(e) => {
                                handleInputCosechaChange(e);
                                inputsSalientesCosecha["unidad-panal"] = !inputsSalientesCosecha["unidad-panal"] ? "cuadros" : "";
                            }} />
                            <LabelCosecha>Panal</LabelCosecha>
                        </ValorCosecha>
                        <UnidadCosecha>
                            <SelectCosecha name="unidad-panal" onChange={handleInputCosechaChange}>
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
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <FormAtrasButton onClick={(e) => {
                                                e.preventDefault();
                                                props.history.push("/reina");
                }}/>
                <FormSiguienteButton onClick={(e) => {
                                                e.preventDefault();
                                                props.history.push("/notas");
                                                handleSubmit(e);
                }}/>
            </div>
        </div>
    );
};
