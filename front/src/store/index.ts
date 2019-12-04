import { types } from "mobx-state-tree";

import ConsejosForms from "./ConsejosForms";
import ReinaForms from "./ReinaForms";
import EstadoGeneral from "./EstadoGeneralForm";
import User from "./User";

const RootStore = types
  .model("Root", {
    consejosForms: types.maybeNull(ConsejosForms),
    homeMessage: types.optional(types.string, ""),
    reinaForms: types.maybeNull(ReinaForms),
    estadoGeneral: types.maybeNull(EstadoGeneral),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setUser(user: any) {
      self.user = user;
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
    updateReinaForm: (inputs: any) => {
      self.reinaForms = inputs;
    },
    updateWarning: (warning) => {
      self.warning = warning.message;
    },
    updateEstadoGeneral: (inputs: any) => {
      self.estadoGeneral = inputs;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
