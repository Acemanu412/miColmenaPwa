import { types } from "mobx-state-tree";

import ColmenasForms from "./ColmenasForms";
import ConsejosForms from "./ConsejosForms";
import EstadoGeneral from "./EstadoGeneralForm";
import NotasForms from "./NotasForms";
import ReinaForms from "./ReinaForms";
import User from "./User";

const RootStore = types
  .model("Root", {
    colmenasForm: types.maybeNull(ColmenasForms),
    consejosForms: types.maybeNull(ConsejosForms),
    estadoGeneral: types.maybeNull(EstadoGeneral),
    homeMessage: types.optional(types.string, ""),
    notasForms: types.maybeNull(NotasForms),
    reinaForms: types.maybeNull(ReinaForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setUser(user) {
      self.user = user;
    },
    updateColmenasForm: (inputs) => {
      console.log(inputs, "-----");
      const inputsArmados = {
        ...inputs,
      };
      self.colmenasForm = inputsArmados;
    },

    updateConsejos: (
      inputsIntervenciones: any,
      inputsAlimento: any,
      inputsCosecha: any
    ) => {
      const inputsArmados = {
        abejasAgregadas: inputsIntervenciones.abejasAgregadas,
        acarapisosis: inputsIntervenciones.acarapisosis,
        agregarAbejas: inputsAlimento.agregarAbejas,
        agregarReina: inputsAlimento.agregarReina,
        antibioticos: inputsIntervenciones.antibioticos,
        antihongos: inputsIntervenciones.antihongos,
        antivarroa: inputsIntervenciones.antivarroa,
        celdasCambiadas: inputsIntervenciones.celdasCambiadas,
        cera: inputsCosecha.cera,
        colmenaAislante: inputsIntervenciones.colmenaAislante,
        colmenaDividida: inputsIntervenciones.colmenaDividida,
        colmenaLimpia: inputsIntervenciones.colmenaLimpia,
        exclusorReina: inputsIntervenciones.exclusorReina,
        exclusorReina2: inputsIntervenciones.exclusorReina2,
        exclusorReina3: inputsIntervenciones.exclusorReina3,
        jaleaReal: inputsCosecha.jaleaReal,
        jarabeEspeso: inputsAlimento.jarabeEspeso,
        jarabeLiviano: inputsAlimento.jarabeLiviano,
        medEscara: inputsIntervenciones.medEscara,
        medNosema: inputsIntervenciones.medNosema,
        mezclaSeca: inputsAlimento.mezclaSeca,
        miel: inputsCosecha.miel,
        nosema: inputsIntervenciones.nosema,
        nuevaColmenaAlimentos: inputsAlimento.nuevaColmena,
        nuevaColmenaIntervenciones: inputsIntervenciones.nuevaColmena,
        otrosAntivarroa: inputsIntervenciones.otrosAntivarroa,
        panal: inputsCosecha.panal,
        pantallaAbierta: inputsIntervenciones.pantallaAbierta,
        pantallaCerrada: inputsIntervenciones.pantallaCerrada,
        polen: inputsCosecha.polen,
        propoleo: inputsCosecha.propoleo,
        reinaAgregada: inputsIntervenciones.reinaAgregada,
        unidadCera: inputsCosecha["unidad-cera"],
        unidadJaleaReal: inputsCosecha["unidad-jaleaReal"],
        unidadMiel: inputsCosecha["unidad-miel"],
        unidadPanal: inputsCosecha["unidad-panal"],
        unidadPolen: inputsCosecha["unidad-polen"],
        unidadPropoleo: inputsCosecha["unidad-propoleo"],
      };
      self.consejosForms = inputsArmados;
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
