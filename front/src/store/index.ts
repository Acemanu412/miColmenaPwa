import { types } from "mobx-state-tree";
import moment from "moment";

import AgregarColmenaForms from "./AgregarColmena";
import AgregarColmenaDevice from "./AgregarColmenaDevice";
import Colmena from "./Colmena";
import ColmenasForms from "./ColmenasForms";
import { AlimentoForm, CosechaForm, IntervencionesForm } from "./ConsejosForms";
import EstadoGeneral from "./EstadoGeneralForm";
import InputDevice from "./InputDevice";
import Media from "./Media";
import NotasForms from "./NotasForms";
import ReinaForms from "./ReinaForms";
import User from "./User";

// La configuración siguiente esta hecha utilizando Mobx-state-trees. Al ser una configuración básica, recomendamos leer
// la documentación en caso de surgir alguna duda: https://mobx-state-tree.js.org/concepts/trees

const RootStore = types
  .model("Root", {
    agregarColmenaDevice: types.maybeNull(AgregarColmenaDevice),
    agregarColmenaForms: types.maybeNull(AgregarColmenaForms),
    checkCC: types.optional(types.boolean, false),
    colmena: types.maybeNull(Colmena),
    colmenasForm: types.maybeNull(ColmenasForms),
    consejosAlimento: types.maybeNull(AlimentoForm),
    consejosCosecha: types.maybeNull(CosechaForm),
    consejosIntervenciones: types.maybeNull(IntervencionesForm),
    currentDay: types.optional(
      types.string,
      `${moment().date()}-${moment().month() + 1}-${moment().year()}`
    ),
    estadoGeneral: types.maybeNull(EstadoGeneral),
    homeMessage: types.optional(types.string, ""),
    inputDevice: types.maybeNull(InputDevice),
    isFetchingUser: types.optional(types.boolean, false),
    media: types.maybeNull(Media),
    notasForms: types.maybeNull(NotasForms),
    reinaForms: types.maybeNull(ReinaForms),
    user: types.maybeNull(User),
    warning: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setCheckCC(bool) {
      self.checkCC = bool;
    },
    setCurrentDay(day) {
      self.currentDay = day;
    },
    setColmena(colmena) {
      self.colmena = colmena;
    },
    setUser(user) {
      self.user = user;
      self.isFetchingUser = false;
    },
    setIsFetchingUser(fetching) {
      self.isFetchingUser = fetching;
    },
    setMedia(media: any) {
      self.media = media;
    },
    setUrlEstadoGeneralForm: (url: any) => {
      self.estadoGeneral.urlAudio = url;
    },
    setUrlNotasForm: (url: any) => {
      console.log(self.notasForms)
      self.notasForms.urlNotaAudio = url;
    },
    updateAgregarColmenaDevice: (inputs: any) => {
      const inputsArmados = {
        MACadress: inputs.MACadress,
        nombreColmena: inputs.nombreColmena,
      };
      self.agregarColmenaDevice = inputsArmados;
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
      self.colmenasForm = inputs;
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
    updateInputDevice: (inputDevice: any) => {
      self.inputDevice = inputDevice ? inputDevice : null;
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
        fecha: inputs.fecha,
        salud: inputs.salud,
        urlAudio: "",
      };
      self.estadoGeneral = inputsArmados;
    },
  }));

export default RootStore;
export type IRootStore = typeof RootStore.Type;
