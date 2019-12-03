import { types } from "mobx-state-tree";

const ReinaForms = types
  .model("Reina", {
    alasRotas: types.boolean,
    celulasReina: types.string,
    huevosVistos: types.boolean,
    marcada: types.boolean,
    reinaPresente: types.boolean,
    removed: types.boolean,
    swarm: types.boolean,
  });

export default ReinaForms;
