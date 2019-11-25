export {};
const S = require("sequelize");
const db = require("../config/db");

class ManualConsejos extends S.Model {}

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
