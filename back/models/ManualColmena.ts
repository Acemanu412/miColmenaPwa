export {};
const S = require("sequelize");
const db = require("../config/db");

class ManualColmena extends S.Model {}

ManualColmena.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    poblacion: {
      type: S.INTEGER,
      allowNull: false
    },

    comportamiento: {
      type: S.INTEGER,
      allowNull: false
    },

    calidadCrias: {
      type: S.INTEGER,
      allowNull: false
    },

    cuadroCrias: {
      type: S.INTEGER,
      allowNull: false
    },

    cuadroMiel: {
      type: S.INTEGER,
      allowNull: false
    },

    comidas: {
      type: S.INTEGER,
      allowNull: false
    },

    problemasSalud: {
      type: S.ARRAY(S.TEXT),
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "manualcolmena"
  }
);

module.exports = ManualColmena;
