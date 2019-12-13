const S = require("sequelize");
const db = require("../config/db");

class DeviceInput extends S.Model { }

// En el momento de esta implementación, este modelo esta testeado con información falsa. Requiere probarse con el Arduino.
DeviceInput.init(
  {
    date: {
      type: S.DATE,
      allowNull: false
    },

    latitud: {
      type: S.STRING,
      allowNull: false
    },

    longitud: {
      type: S.STRING,
      allowNull: false
    },

    pesoUno: {
      type: S.FLOAT,
      allowNull: false
    },

    pesoDos: {
      type: S.FLOAT,
      allowNull: false
    },

    pesoTres: {
      type: S.FLOAT,
      allowNull: false
    },

    pesoCuatro: {
      type: S.FLOAT,
      allowNull: false
    },

    humedadInterior: {
      type: S.INTEGER,
      allowNull: false
    },

    temperaturaInterior: {
      type: S.INTEGER,
      allowNull: false
    },

    audio: {
      type: S.STRING,
      allowNull: false
    },

    imagenPiquera: {
      type: S.STRING,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: "deviceinput"
  }
);

module.exports = DeviceInput;
