import { types } from "mobx-state-tree";

const EstadoGeneralForm = types.model("EstadoGeneral", {
  fecha: types.maybe(types.string),
  salud: types.maybe(types.string),
  urlAudio: types.maybe(types.string),
});

export default EstadoGeneralForm;
