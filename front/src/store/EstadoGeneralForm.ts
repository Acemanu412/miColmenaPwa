import { types } from "mobx-state-tree";

const EstadoGeneralForm = types.model("EstadoGeneral", {
  fecha: types.string,
  salud: types.string,
  audio: types.string,
});

export default EstadoGeneralForm;
