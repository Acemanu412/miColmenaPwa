const S = require("sequelize");
const db = require("../config/db");

class Notas extends S.Model { }

Notas.init(
  {
    date: {
      type: S.STRING,
      allowNull: false
    },

    notaTexto: {
      type: S.STRING,
    },

    urlNotaAudio: {
      type: S.STRING,
    }
  },
  {
    sequelize: db,
    modelName: "notas"
  }
);

module.exports = Notas;
