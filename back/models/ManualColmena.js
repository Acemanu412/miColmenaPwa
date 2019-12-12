const S = require("sequelize");
const db = require("../config/db");

class ManualColmena extends S.Model { }

ManualColmena.init(
  {
    date: {
      type: S.STRING,
      allowNull: false,
    },

    poblacion: {
      type: S.INTEGER,
    },

    comportamiento: {
      type: S.INTEGER,
    },

    calidadCrias: {
      type: S.INTEGER,
    },

    numeroCuadrosTotalesCrias: {
      type: S.INTEGER,
    },

    numeroCuadrosTotalesMiel: {
      type: S.INTEGER,
    },

    numeroComidas: {
      type: S.INTEGER,
    },

    // se recorre el objeto que contiene los keys de salud y valores boolean. 
    // Cuando el tipo es boolean y true se pushea el key al array
    problemasSalud: {
      type: S.ARRAY(S.STRING),
    }
  },
  {
    sequelize: db,
    modelName: "manualcolmena"
  }
);

module.exports = ManualColmena;
