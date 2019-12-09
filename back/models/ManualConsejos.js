const S = require("sequelize");
const db = require("../config/db");

class ManualConsejos extends S.Model { }

ManualConsejos.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    intervenciones: {
      type: S.ARRAY(S.TEXT),
      allowNull: false
    },

    alimento: {
      type: S.ARRAY(S.TEXT),
      allowNull: false
    },

// esto es para todo lo que esta abajo
// se recibe el valor y los unidades por separado 
// se puede unificar en un string el valor y los unidades.
// ej: "8kg"

    miel: {
      type: S.INTEGER,
      allowNull: false
    },

    jaleaReal: {
      type: S.INTEGER,
      allowNull: false
    },

    polen: {
      type: S.INTEGER,
      allowNull: false
    },

    propoleo: {
      type: S.INTEGER,
      allowNull: false
    },

    cera: {
      type: S.INTEGER,
      allowNull: false
    },

    panal: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "manualconsejos"
  }
);

module.exports = ManualConsejos;
