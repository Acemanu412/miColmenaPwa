import { types } from "mobx-state-tree";

const ColmenasForms = types.model("Colmenas", {
  acarosBarroa: types.maybeNull(types.boolean),
  alasDeformadas: types.maybeNull(types.boolean),
  calidadCrias: types.maybeNull(types.string),
  comportamiento: types.maybeNull(types.string),
  criaCalcarea: types.maybeNull(types.boolean),
  criaDePiedra: types.maybeNull(types.boolean),
  escarabajos: types.maybeNull(types.boolean),
  loqueAmericana: types.maybeNull(types.boolean),
  loqueEuropea: types.maybeNull(types.boolean),
  mesesDeCera: types.maybeNull(types.boolean),
  moho: types.maybeNull(types.boolean),
  nosema: types.maybeNull(types.boolean),
  numeroComidas: types.maybeNull(types.string),
  numeroDeComidas: types.maybeNull(types.boolean),
  paralisisCronica: types.maybeNull(types.boolean),
  poblacion: types.maybeNull(types.string),
  polillasDeCera: types.maybeNull(types.boolean),
  pupaComidas: types.maybeNull(types.boolean),
  pupasPicadas: types.maybeNull(types.boolean),
  tropilaelapsosis: types.maybeNull(types.boolean),
  varroas: types.maybeNull(types.boolean),
});

export default ColmenasForms;
