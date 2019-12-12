const S = require("sequelize");
const db = require("../config/db");

class EstadoGeneral extends S.Model { }

EstadoGeneral.init(
  {
    date: {
      type: S.STRING,
      allowNull: false
    },

    salud: {
      type: S.STRING,
    },

    audio: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "estadoGeneral"
  }
);

module.exports = EstadoGeneral;
