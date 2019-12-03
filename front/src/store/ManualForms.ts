import { types } from "mobx-state-tree";

const ManualForms = types
  .model("Forms", {
    // El tipo lo deje String pero cada form debería tener un objeto con
    // cada campo definido como una propiedad del mismo
    colmena: types.string,
    consejos: types.string,
    estadoGeneral: types.string,
    notas: types.string,
    reina: types.string,
  });

export default ManualForms;
