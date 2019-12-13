const S = require("sequelize");
const db = require("../config/db");

// Desde el formulario AgregarColmenaEstandar se recibe mas informacion de la que se guarda 
// (tipo de colmena, especie, localizacion) 

class Colmena extends S.Model { }

Colmena.init(
  {
    nombre: {
      type: S.STRING,
    },

    foto: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "colmena"
  }
);

module.exports = Colmena;

