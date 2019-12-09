import { types } from "mobx-state-tree";

export const IntervencionesForm = types.model({
  AbejasAgregadas: types.boolean,
  Acarapisosis: types.boolean,
  Antibioticos: types.boolean,
  Antihongos: types.boolean,
  Antivarroa: types.boolean,
  CeldasCambiadas: types.boolean,
  ColmenaAislante: types.boolean,
  ColmenaDividida: types.boolean,
  ColmenaLimpia: types.boolean,
  ExclusorReina: types.boolean,
  ExclusorReina2: types.boolean,
  ExclusorReina3: types.boolean,
  MedEscara: types.boolean,
  MedNosema: types.boolean,
  Nosema: types.boolean,
  NuevaColmenaIntervenc: types.boolean,
  OtrosAntivarroa: types.boolean,
  PantallaAbierta: types.boolean,
  PantallaCerrada: types.boolean,
  ReinaAgregada: types.boolean,
})

export const AlimentoForm = types.model({
  AgregarAbejas: types.boolean,
  AgregarReina: types.boolean,
  JarabeEspeso: types.boolean,
  JarabeLiviano: types.boolean,
  MezclaSeca: types.boolean,
  NuevaColmenaAlimentos: types.boolean,
});

export const CosechaForm = types.model({
  cera: types.string,
  jaleaReal: types.string,
  miel: types.string,
  panal: types.string,
  polen: types.string,
  propoleo: types.string,
});

