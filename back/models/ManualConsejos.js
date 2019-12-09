const S = require("sequelize");
const db = require("../config/db");

class ManualConsejos extends S.Model { }

ManualConsejos.init(
  {
    date: {
      type: S.DATE,
    },

    alimento: {
      type: S.ARRAY(S.TEXT),
    },

// esto es para todo lo que esta abajo
// se recibe el valor y los unidades por separado 
// se puede unificar en un string el valor y los unidades.
// ej: "8kg"

    miel: {
      type: S.INTEGER,
    },

    jaleaReal: {
      type: S.INTEGER,
    },

    polen: {
      type: S.INTEGER,
    },

    propoleo: {
      type: S.INTEGER,
    },

    cera: {
      type: S.INTEGER,
    },

    panal: {
      type: S.INTEGER,
    }
  },
  {
    sequelize: db,
    modelName: "manualconsejos"
  }
);

module.exports = ManualConsejos;
