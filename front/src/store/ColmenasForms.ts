import { types } from "mobx-state-tree";

const ColmenasForms = types
  .model("Colmenas", {
    calidadCrias: types.maybeNull(types.string),
    comportamiento: types.maybeNull(types.string),
    numeroComidas: types.maybeNull(types.string),
    poblacion: types.maybeNull(types.string),
 
  });

export default ColmenasForms;
