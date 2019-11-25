export {};
const S = require("sequelize");
const db = require("../config/db");

class ManualReina extends S.Model {}

ManualReina.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    reina: {
      type: S.BOOLEAN,
      allowNull: false
    },

    huevosVisibles: {
      type: S.BOOLEAN,
      allowNull: false
    },

    alasCortadas: {
      type: S.BOOLEAN,
      allowNull: false
    },

    mercado: {
      type: S.BOOLEAN,
      allowNull: false
    },

    celdasReina: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "manualreina"
  }
);

module.exports = ManualReina;
