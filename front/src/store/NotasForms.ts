import { types } from "mobx-state-tree";

const NotasForms = types
    .model("Notas", {
        urlNotaAudio: types.string,
        notaTexto: types.string,
    });

export default NotasForms;