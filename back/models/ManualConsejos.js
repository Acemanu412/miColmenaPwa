const S = require("sequelize");
const db = require("../config/db");

class ManualConsejos extends S.Model { }

ManualConsejos.init(
  {
    date: {
      type: S.DATE,
      allowNull: false,
    },

    alimento: {
      type: S.ARRAY(S.STRING),
    },

    intervenciones: {
      type: S.ARRAY(S.STRING)
    },

    // esto es para todo lo que esta abajo
    // se recibe el valor y los unidades por separado 
    // se puede unificar en un string el valor y los unidades.
    // ej: "8kg"

    miel: {
      type: S.STRING,
    },

    jaleaReal: {
      type: S.STRING,
    },

    polen: {
      type: S.STRING,
    },

    propoleo: {
      type: S.STRING,
    },

    cera: {
      type: S.STRING,
    },

    panal: {
      type: S.STRING,
    }
  },
  {
    sequelize: db,
    modelName: "manualconsejos"
  }
);

module.exports = ManualConsejos;
