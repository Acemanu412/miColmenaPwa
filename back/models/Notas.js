const S = require("sequelize");
const db = require("../config/db");

class Notas extends S.Model { }

Notas.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    notas: {
      type: S.STRING,
      allowNull: false
    },

    notaDeVoz: {
      type: S.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "notas"
  }
);

module.exports = Notas;
