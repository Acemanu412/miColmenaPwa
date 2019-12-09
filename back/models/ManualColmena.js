const S = require("sequelize");
const db = require("../config/db");

class ManualColmena extends S.Model { }

ManualColmena.init(
  {
    date: {
      type: S.DATE,
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
