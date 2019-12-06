const Audio = require("./Audio")
const Colmena = require("./Colmena");
const Device = require("./Device");
const DeviceInput = require("./DeviceInput");
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
Device.hasMany(DeviceInput);
TorresMeteorologicas.hasMany(Colmena);
TorresMeteorologicas.hasMany(InformeMeteorologico);
User.hasMany(Colmena, { as: "colmena" });

console.log(User.prototype)

module.exports = {
  User,
  Colmena,
  Device,
  DeviceInput,
  InformeMeteorologico,
  ManualColmena,
  ManualReina,
  ManualConsejos
};
