import { types } from "mobx-state-tree";

const NotasForms = types.model("Notas", {
  notaTexto: types.string,
  urlNotaAudio: types.string,
});

export default NotasForms;
