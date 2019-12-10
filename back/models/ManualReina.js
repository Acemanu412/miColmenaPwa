const S = require("sequelize");
const db = require("../config/db");

class ManualReina extends S.Model { }

ManualReina.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    reinaPresente: {
      type: S.BOOLEAN,
    },

    huevosVistos: {
      type: S.BOOLEAN,
    },

    alasRotas: {
      type: S.BOOLEAN,
    },

    marcada: {
      type: S.BOOLEAN,
    },

    celulasReina: {
      type: S.INTEGER,
    },

    removed: {
      type: S.BOOLEAN,
    },

    swarm: {
      type: S.BOOLEAN,
    }
  },
  {
    sequelize: db,
    modelName: "manualreina"
  }
);

module.exports = ManualReina;
