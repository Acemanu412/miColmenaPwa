const S =require("sequelize");
const db =require("../config/db");

class Colmena extends S.Model {}

Colmena.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false
    },

    foto: {
      type: S.STRING,
      allowNull: false
    },

    device: {
      type: S.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "colmena"
  }
);

module.exports = Colmena;
