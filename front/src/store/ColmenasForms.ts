import { types } from "mobx-state-tree";

const ColmenasForms = types
  .model("Colmenas", {
    calidadCrias: types.maybeNull(types.string),
    comportamiento: types.maybeNull(types.string),
    numeroComidas: types.maybeNull(types.string),
    poblacion: types.maybeNull(types.string),
    acarosBarroa: types.maybeNull(types.boolean),
    alasDeformadas: types.maybeNull(types.boolean),
    criaCalcarea: types.maybeNull(types.boolean),
    criaDePiedra: types.maybeNull(types.boolean),
    escarabajos: types.maybeNull(types.boolean),
    loqueAmericana: types.maybeNull(types.boolean),
    loqueEuropea: types.maybeNull(types.boolean),
    mesesDeCera: types.maybeNull(types.boolean),
    moho: types.maybeNull(types.boolean),
    nosema: types.maybeNull(types.boolean),
    numeroDeComidas: types.maybeNull(types.boolean),
    paralisisCronica: types.maybeNull(types.boolean),
    polillasDeCera: types.maybeNull(types.boolean),
    pupaComidas: types.maybeNull(types.boolean),
    pupasPicadas: types.maybeNull(types.boolean),
    tropilaelapsosis: types.maybeNull(types.boolean),
    varroas: types.maybeNull(types.boolean),

 
  });

export default ColmenasForms;
