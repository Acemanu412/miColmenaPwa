import { types } from "mobx-state-tree";

<<<<<<< HEAD
=======
import ConsejosForms from "./ConsejosForms";
>>>>>>> be0f5dbc247074c2e4a5938d1f0e8b25a45f2d09
import ReinaForms from "./ReinaForms";
import User from "./User";

const RootStore = types
  .model("Root", {
<<<<<<< HEAD
=======
    consejosForms: types.maybeNull(ConsejosForms),
>>>>>>> be0f5dbc247074c2e4a5938d1f0e8b25a45f2d09
    homeMessage: types.optional(types.string, ""),
    reinaForms: types.maybeNull(ReinaForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setUser(user: any) {
      self.user = user;
    },
    updateConsejos: (inputsIntervenciones: any,
                     inputsAlimento: any,
                     inputsCosecha: any) => {
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
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
