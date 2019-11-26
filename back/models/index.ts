export {};
const User = require("../models/User");
const Colmena = require("../models/Colmena");
const DeviceInput = require("../models/DeviceInput");
const ManualColmena = require("../models/ManualColmena");
const ManualReina = require("../models/ManualReina");
const ManualConsejos = require("../models/ManualConsejos");

User.hasMany(Colmena, { as: "colmena" });
Colmena.hasMany(DeviceInput);
Colmena.hasMany(ManualColmena);
Colmena.hasMany(ManualConsejos);
Colmena.hasMany(ManualReina);

module.exports = {
  User,
  Colmena,
  DeviceInput,
  ManualColmena,
  ManualReina,
  ManualConsejos
};
