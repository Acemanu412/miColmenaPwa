const User = require("./User");
const Colmena = require("./Colmena");
const Device = require("./Device");
const DeviceInput = require("./DeviceInput");
const ManualColmena = require("./ManualColmena");
const ManualReina = require("./ManualReina");
const ManualConsejos = require("./ManualConsejos");

User.hasMany(Colmena, { as: "colmena" });
Device.hasMany(DeviceInput);
Colmena.hasMany(DeviceInput);
Colmena.hasMany(ManualColmena);
Colmena.hasMany(ManualConsejos);
Colmena.hasMany(ManualReina);

module.exports = {
  User,
  Colmena,
  Device,
  DeviceInput,
  ManualColmena,
  ManualReina,
  ManualConsejos
};
