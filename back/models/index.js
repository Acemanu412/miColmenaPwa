const Audio = require("./Audio")
const Colmena = require("./Colmena");
const Device = require("./Device");
const DeviceInput = require("./DeviceInput");
const EstadoGeneral = require("./EstadoGeneral");
const InformeMeteorologico = require("./InformeMeteorologico")
const ManualColmena = require("./ManualColmena");
const ManualReina = require("./ManualReina");
const ManualConsejos = require("./ManualConsejos");
const Notas = require("./Notas")
const TorresMeteorologicas = require("./TorresMeteorologicas")
const User = require("./User");

Notas.hasMany(Audio);
Colmena.hasMany(DeviceInput);
Colmena.hasMany(ManualColmena);
Colmena.hasMany(ManualConsejos);
Colmena.hasMany(ManualReina);
Colmena.hasMany(Notas);
Colmena.hasMany(EstadoGeneral);
Device.belongsTo(Colmena);
Device.hasMany(DeviceInput);
TorresMeteorologicas.hasMany(Colmena);
TorresMeteorologicas.hasMany(InformeMeteorologico);
User.hasMany(Colmena, { as: "colmena" });

module.exports = {
  User,
  Colmena,
  Device,
  DeviceInput,
  EstadoGeneral,
  InformeMeteorologico,
  ManualColmena,
  ManualReina,
  ManualConsejos,
  Notas,
};
