const S = require("sequelize");
const db = require("../config/db");

class Colmena extends S.Model { }

Colmena.init(
  {
    nombre: {
      type: S.STRING,
    },

    foto: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "colmena"
  }
);

module.exports = Colmena;

