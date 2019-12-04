const User = require("./User");
const Colmena = require("./Colmena");
const Device = require("./Device");
const DeviceInput = require("./DeviceInput");
const InformeMeteorologico = require("./InformeMeteorologico")
const ManualColmena = require("./ManualColmena");
const ManualReina = require("./ManualReina");
const ManualConsejos = require("./ManualConsejos");
const TorresMeteorologicas = require("./TorresMeteorologicas")

User.hasMany(Colmena, { as: "colmena" });
Colmena.hasMany(DeviceInput);
Colmena.hasMany(ManualColmena);
Colmena.hasMany(ManualConsejos);
Colmena.hasMany(ManualReina);
Device.hasMany(DeviceInput);
TorresMeteorologicas.hasMany(Colmena);
TorresMeteorologicas.hasMany(InformeMeteorologico);

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
