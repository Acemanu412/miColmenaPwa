const S = require("sequelize");
const db = require("../config/db");

class EstadoGeneral extends S.Model { }

// El campo 'audio' es una URL que dirije a la carpeta de recursos estáticos donde se guardan los archivos.
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
