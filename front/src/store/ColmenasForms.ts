import { types } from "mobx-state-tree";

const ColmenasForms = types.model("Colmenas", {
  AcarosBarroa: types.boolean,
  AlasDeformadas: types.boolean,
  CriaCalcarea: types.boolean,
  CriaDePiedra: types.boolean,
  Escarabajos: types.boolean,
  LoqueAmericana: types.boolean,
  LoqueEuropea: types.boolean,
  MesesDeCera: types.boolean,
  Moho: types.boolean,
  Nosema: types.boolean,
  NumeroDeComidas: types.boolean,
  ParalisisCronica: types.boolean,
  PolillasDeCera: types.boolean,
  PupaComidas: types.boolean,
  PupasPicadas: types.boolean,
  Tropilaelapsosis: types.boolean,
  Varroas: types.boolean,
  calidadCrias: types.string,
  comportamiento: types.string,
  numeroComidas: types.string,
  numeroCuadrosTotalesCrias: types.string,
  numeroCuadrosTotalesMiel: types.string,
  poblacion: types.string,
});

export default ColmenasForms;
