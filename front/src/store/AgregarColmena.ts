import { types } from "mobx-state-tree";

const AgregarColmenaForms = types
    .model("AgregarColmena", {
        direccionColmenas: types.string,
        especieAbejas: types.string,
        nombreColmena: types.string,
        tipoColmena: types.string,
    });

export default AgregarColmenaForms;
