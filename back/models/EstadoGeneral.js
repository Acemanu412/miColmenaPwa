const S = require("sequelize");
const db = require("../config/db");

class EstadoGeneral extends S.Model { }

EstadoGeneral.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    salud: {
      type: S.STRING,
      allowNull: false
    },

    audio: {
      type: S.STRING,
      allowNull: false
    },

    // imagen: {
    //   type: S.STRING,
    //   allowNull: false
    // },
  },
  {
    sequelize: db,
    modelName: "estadoGeneral"
  }
);

module.exports = EstadoGeneral;
