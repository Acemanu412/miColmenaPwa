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
