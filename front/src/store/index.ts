import { types } from "mobx-state-tree";

import AgregarColmenaForms from "./AgregarColmena";
import ColmenasForms from "./ColmenasForms";
import { AlimentoForm, CosechaForm, IntervencionesForm } from "./ConsejosForms";
import EstadoGeneral from "./EstadoGeneralForm";
import Media from "./Media";
import NotasForms from "./NotasForms";
import ReinaForms from "./ReinaForms";
import User from "./User";

const RootStore = types
  .model("Root", {
    agregarColmenaForms: types.maybeNull(AgregarColmenaForms),
    colmenasForm: types.maybeNull(ColmenasForms),
    consejosAlimento: types.maybeNull(AlimentoForm),
    consejosCosecha: types.maybeNull(CosechaForm),
    consejosIntervenciones: types.maybeNull(IntervencionesForm),
    estadoGeneral: types.maybeNull(EstadoGeneral),
    homeMessage: types.optional(types.string, ""),
    media: types.maybeNull(Media),
    notasForms: types.maybeNull(NotasForms),
    reinaForms: types.maybeNull(ReinaForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setUser(user) {
      self.user = user;
    },

    setMedia(media: any) {
      self.media = media;
    },
    updateAgregarColmenaForm: (inputs: any) => {
      const inputsArmados = {
        direccionColmenas: inputs.direccionColmena,
        especieAbejas: inputs.especieAbejas,
        nombreColmena: inputs.nombreColmena,
        tipoColmena: inputs.tipoColmena,
      };
      self.agregarColmenaForms = inputsArmados;
    },
    updateColmenasForm: (inputs) => {
      const inputsArmados = {
        ...inputs,
      };
      self.colmenasForm = inputsArmados;
    },

    updateConsejos: (
      inputsIntervenciones: any,
      inputsAlimento: any,
      inputsCosecha: any,
    ) => {
      const inputsCosechaArmados = {
        cera: inputsCosecha.cera + inputsCosecha["unidad-cera"],
        jaleaReal: inputsCosecha.jaleaReal + inputsCosecha["unidad-jaleaReal"],
        miel: inputsCosecha.miel + inputsCosecha["unidad-miel"],
        panal: inputsCosecha.panal + inputsCosecha["unidad-panal"],
        polen: inputsCosecha.polen + inputsCosecha["unidad-polen"],
        propoleo: inputsCosecha.propoleo + inputsCosecha["unidad-propoleo"],
      };
      self.consejosIntervenciones = inputsIntervenciones;
      self.consejosAlimento = inputsAlimento;
      self.consejosCosecha = inputsCosechaArmados;
    },
    updateHomeMessage: (homeMessage) => {
      self.homeMessage = homeMessage.message;
    },
    updateNotasForm: (inputs: any) => {
      self.notasForms = inputs;
    },
    updateReinaForm: (inputs: any) => {
      self.reinaForms = inputs;
    },
    updateWarning: (warning) => {
      self.warning = warning.message;
    },

    updateEstadoGeneral: (inputs: any) => {
      const inputsArmados = {
        audio: inputs.audio,
        fecha: inputs.fecha,
        salud: inputs["salud"],
      };
      self.estadoGeneral = inputsArmados;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
