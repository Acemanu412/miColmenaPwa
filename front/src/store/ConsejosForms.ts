import { types } from "mobx-state-tree";

export const IntervencionesForm = types.model({
  abejasAgregadas: types.boolean,
  acarapisosis: types.boolean,
  antibioticos: types.boolean,
  antihongos: types.boolean,
  antivarroa: types.boolean,
  celdasCambiadas: types.boolean,
  colmenaAislante: types.boolean,
  colmenaDividida: types.boolean,
  colmenaLimpia: types.boolean,
  exclusorReina: types.boolean,
  exclusorReina2: types.boolean,
  exclusorReina3: types.boolean,
  medEscara: types.boolean,
  medNosema: types.boolean,
  nosema: types.boolean,
  nuevaColmenaIntervenciones: types.boolean,
  otrosAntivarroa: types.boolean,
  pantallaAbierta: types.boolean,
  pantallaCerrada: types.boolean,
  reinaAgregada: types.boolean,
})

export const AlimentoForm = types.model({
  agregarAbejas: types.boolean,
  agregarReina: types.boolean,
  jarabeEspeso: types.boolean,
  jarabeLiviano: types.boolean,
  mezclaSeca: types.boolean,
  nuevaColmenaAlimentos: types.boolean,
});

export const CosechaForm = types.model({
  cera: types.string,
  jaleaReal: types.string,
  miel: types.string,
  panal: types.string,
  polen: types.string,
  propoleo: types.string,
});

