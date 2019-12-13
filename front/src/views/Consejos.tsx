import { observer } from "mobx-react";
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
import {
    FormAtrasButton,
    FormSiguienteButton,
} from "../styles/FormStyles";
import { NavBar } from "./NavBar";

// Texto incluido en los checkboxes
const IntervencionesArr = ["AbejasAgregadas", "Acarapisosis", "Antibioticos", "Antihongos", "Antivarroa",
    "CeldasCambiadas", "ColmenaAislante", "ColmenaDividida", "ColmenaLimpia", "ExclusorReina", "ExclusorReina2",
    "ExclusorReina3", "MedEscara", "MedNosema", "Nosema", "NuevaColmenaIntervenc", "OtrosAntivarroa",
    "PantallaAbierta", "PantallaCerrada", "ReinaAgregada"];

const AlimentoArr = ["AgregarAbejas", "AgregarReina", "JarabeEspeso", "JarabeLiviano", "MezclaSeca",
    "NuevaColmenaAlimentos"];

const CosechaArr = ["cera", "jaleaReal", "miel", "panal", "polen", "propoleo", "unidad-cera", "unidad-jaleaReal",
    "unidad-miel", "unidad-panal", "unidad-polen", "unidad-propoleo"];

// Genero objeto para pasar como valor inicial al hook
function ObjectConverter(array, startValue) {
    const newObj = {};
    for (const element of array) {
        newObj[element] = startValue;
    }
    return newObj;
}

const IntervencionesObj = ObjectConverter(IntervencionesArr, false);
const AlimentoObj = ObjectConverter(AlimentoArr, false);
const CosechaObj = ObjectConverter(CosechaArr, "");

export const Consejos: React.FC<RouteComponentProps> = observer((props) => {
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
        handleSubmit }: any = useForm(consejos, IntervencionesObj, AlimentoObj, CosechaObj);
    return (
        <div>
            <NavBar />
            {store.user || (!store.user && store.isFetchingUser) ?
                <div>
                    <ConsejosContainer>
                        <ConsejosTexto>Intervenciones: Toca las que aplican</ConsejosTexto>
                        <Intervenciones>
                            {IntervencionesArr.map(((intervencion, index) => {
                                const elemento = intervencion.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                                return <CheckboxContainer key={index} activo={inputsSalientesIntervenciones[intervencion]}>
                                    {elemento}
                                    <CheckboxConsejos type="checkbox"
                                        name={intervencion}
                                        onChange={(e) => { handleInputIntervencionesChange(e) }} />
                                </CheckboxContainer>;
                            }
                            ))}
                        </Intervenciones>
                        <ConsejosTexto>Alimento: Toca las que aplican</ConsejosTexto>
                        <Alimento>
                            {AlimentoArr.map(((alimento, index) => {
                                const elemento = alimento.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                                return <CheckboxContainer key={index} activo={inputsSalientesAlimento[alimento]}>
                                    {elemento}
                                    <CheckboxConsejos type="checkbox"
                                        name={alimento}
                                        onChange={(e) => { handleInputAlimentoChange(e) }} />
                                </CheckboxContainer>;
                            }
                            ))}
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
                                        inputsSalientesCosecha["unidad-panal"] =
                                            !inputsSalientesCosecha["unidad-panal"] ? "cuadros" : "";
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
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <FormAtrasButton onClick={(e) => {
                            e.preventDefault();
                            props.history.push("/reina");
                        }} />
                        <FormSiguienteButton onClick={(e) => {
                            e.preventDefault();
                            props.history.push("/notas");
                            handleSubmit(e);
                        }} />
                    </div>
                </div>
                : <h3 style={{ marginTop: "10vh" }}>ACCESO DENEGADO</h3>}
        </div>
    )
});
