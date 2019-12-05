import { types } from "mobx-state-tree";

const EstadoGeneralForm = types.model("EstadoGeneral", {
  audio: types.maybeNull(types.string),
  fecha: types.maybe(types.string),
  salud: types.maybe(types.string),
});

export default EstadoGeneralForm;
