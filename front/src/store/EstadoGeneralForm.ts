import { types } from "mobx-state-tree";

const EstadoGeneralForm = types.model("EstadoGeneral", {
  audio: types.string,
  fecha: types.string,
  salud: types.string,
});

export default EstadoGeneralForm;
